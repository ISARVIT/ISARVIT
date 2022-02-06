import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import html2canvas from 'html2canvas';
import JoditEditor from "jodit-react";
import QRCode from 'qrcode.react'
import InlineSVG from 'svg-inline-react';
import { jsPDF } from 'jspdf';
import ReactHtmlParser from 'react-html-parser';
const YAML = require('json-to-pretty-yaml');

export default function Download(props){
  const editor = React.useRef(null)
  const config = {height: "100%", toolbarAdaptive: false, readonly: false}
  const [edit,setEdit]=React.useState(0)
  function getOrgans(){
    return props.answers.questions.svg.organs.map(organ=>organ.length!==1?organ[(Math.random()<0.5)|0]:organ[0]).join('')
  }
  function generateQRCode(){
    return YAML.stringify({formID: props.control.formID, user: props.control.user.username, date: new Date().toISOString().slice(0, 10), answers: props.answers.answers})
  }
  function getTemplate(){
    let answers = []
    for (var key in props.answers.answers) {
      if(props.answers.answers.hasOwnProperty(key)) {
        answers.push( [ key, props.answers.answers[key] ] );
      }
    }
    return answers.map(answer=>{
      if(answer[0] in props.answers.questions.template){
        let this_template = props.answers.questions.template[answer[0]]
        if(this_template.complete){
          return '<p>'+this_template.begin+answer[0]+this_template.end+'</p>'
        }
        else{
          return '<p>'+this_template[answer[1]]+'</p>'
        } 
      }
      else{
        return Math.random()<0.5?'<p>User has chosen '+answer[1]+' in the variable '+answer[0]+'</p>':'<p>The answer to '+answer[0]+' was '+answer[1]+'</p>'
      }
    }).join("")
  }
  const handleChange=(newContent)=>{
    props.setCreator({...props.creator, template: newContent})
  }
  const svgSource = props.answers.questions.svg.begin + getOrgans() + props.answers.questions.svg.end
  function download(text){
    const input = document.getElementById('divToPrint')
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      let filename = "FormID_"+props.control.formID+"_by_"+props.control.user.username+"_"+new Date().getTime();
      pdf.save(filename);
    });
  }
  return(
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2}>
      <Grid item>
        <ButtonGroup size="large" color="primary">
          <Button value={edit} onClick={()=>setEdit(1)} disabled={edit}>Edit Result</Button>
          <Button onClick={download}>Download</Button>
          <Button onClick={()=>setEdit(2)} disabled={edit}>QRCode Only</Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        {edit==1?
          <Paper elevation={3} style={{width: '210mm', height: '297mm'}}>
            <JoditEditor ref={editor} value={getTemplate()} config={config} tabIndex={1} />
          </Paper>
        :edit==2?
          <QRCode value={generateQRCode()} size={750}/>
        :
          <Paper elevation={5}>
            <div id='divToPrint' style={{backgroundColor: '#FFF', width: '210mm', minHeight: '297mm', marginLeft: 'auto', marginRight: 'auto', padding:'2rem'}}>
              <p>ID : {props.answers.answers.identifier} Prénom : {props.answers.answers.patient_first_name} Nom : {props.answers.answers.patient_last_name} Date de naissance : {props.answers.answers.patient_birth}</p>
              <h1 style={{textAlign:'center'}}>URINARY / SCANNER ABDOMINO-PELVIEN</h1>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <QRCode value={generateQRCode()}/>
                <InlineSVG src={svgSource}/>
              </div>
              <hr/>
              <p> Examen : Radiography Réalisé le : {new Date().toLocaleDateString('fr-FR')} </p>
              { ReactHtmlParser(getTemplate()) }
              </div>
          </Paper>
        }
      </Grid>
    </Grid>
  )
}



