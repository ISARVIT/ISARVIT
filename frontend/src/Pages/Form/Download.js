import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import html2canvas from 'html2canvas';

import QRCode from 'qrcode.react'
import InlineSVG from 'svg-inline-react';
import { jsPDF } from 'jspdf';
import ReactHtmlParser from 'react-html-parser';

export default function Download(props){
  function getOrgans(){
    return props.answers.questions.svg.organs.map(organ=>organ.length!==1?organ[(Math.random()<0.5)|0]:organ[0]).join('')
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
  const svgSource = props.answers.questions.svg.begin + getOrgans() + props.answers.questions.svg.end
  function download(text){
    const input = document.getElementById('divToPrint')
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("urinary_andreis.pdf");
    });
  }
  return(
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2}>
      <Grid item>
        <ButtonGroup size="large" color="primary">
          <Button onClick={()=>alert("Not Available Yet!")}>Edit Result</Button>
          <Button onClick={download}>Download</Button>
        </ButtonGroup>
      </Grid>
      <Grid item>
        <Paper elevation={5}>
          <div id='divToPrint' style={{backgroundColor: '#FFF', width: '210mm', minHeight: '297mm', marginLeft: 'auto', marginRight: 'auto', padding:'2rem'}}>
            <p>ID : {props.answers.answers.identifier} Prénom : {props.answers.answers.patient_first_name} Nom : {props.answers.answers.patient_last_name} Date de naissance : {props.answers.answers.patient_birth}</p>
            <h1 style={{textAlign:'center'}}>URINARY / SCANNER ABDOMINO-PELVIEN</h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <QRCode value={props.answers.answers}/>
              <InlineSVG src={svgSource}/>
            </div>
            <hr/>
            <p> Examen : Radiography Réalisé le : {new Date().toLocaleDateString('fr-FR')} </p>
            { ReactHtmlParser(getTemplate()) }
            </div>
        </Paper>
      </Grid>
    </Grid>
  )
}



