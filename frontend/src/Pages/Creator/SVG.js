import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import PublishIcon from '@material-ui/icons/Publish';

import InlineSVG from 'svg-inline-react';

import ClearIcon from '@material-ui/icons/Clear';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function SVG(props){
  const changeBase=(event)=>{
    let newSVG = props.creator.svg;
    newSVG.base = event.target.value;
    props.setCreator({...props.creator, svg: newSVG})
  };
  function buildSVG(){
    let SVG = '<svg>'
    SVG += props.creator.svg.base;
    SVG += props.creator.svg.parts.map(part=>part.value).join("")
    return SVG+'</svg>'
  }
  const addPart=()=>{
    let newSVG = props.creator.svg;
    newSVG.parts.push({key: newSVG.parts.length, cond: '', value: ''})
    props.setCreator({...props.creator, svg: newSVG})
  }
  function removePart(key){
    let newSVG = props.creator.svg;
    newSVG.parts = newSVG.parts.filter(function(part){return part.key !== key})
    props.setCreator({...props.creator, svg: newSVG})
  }
  function changePart(part, event){
    let newSVG = props.creator.svg;
    let index = newSVG.parts.indexOf(part);
    if(index !== -1){
      newSVG.parts[index].value = event.target.value;
    }
    props.setCreator({...props.creator, svg: newSVG})
  }
  return(
    <React.Fragment>
      <Grid item xs={12}>
        <input accept="image/*" type="file" id='inputSVG' style={{display:'none'}}/>
        <label htmlFor='inputSVG'>
          <Button variant="outlined" color="primary" component="span" startIcon={<PublishIcon />}>
            Upload Base SVG
          </Button>
        </label>
      </Grid>
      <Grid item xs={12}>
        <Paper xs={12} style={{minWidth:'50rem', padding:'1rem'}} elevation={3}>
          <InlineSVG src={buildSVG()}/>
          <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
            <Grid item xs={12}>
              <TextField value={props.creator.svg.base} multiline onChange={changeBase} fullWidth required label="Base" />
            </Grid>
            {props.creator.svg.parts.map((part)=>
              <Grid key={part.key} item container spacing={2} container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={2}>
                  <Select fullWidth value={0} onChange={null}>
                    {props.creator.outputs.map(variable=><MenuItem value={variable.outputID}>{variable.variable}</MenuItem>)}
                  </Select>
                </Grid>
                <Grid item xs={9}>
                  <TextField value={part.value} multiline onChange={(event)=>changePart(part,event)} fullWidth placeholder='SVG' />
                </Grid>
                <Grid item xs={1}>
                  <IconButton size='small' onClick={()=>removePart(part.key)}>
                    <ClearIcon />
                  </IconButton>
                </Grid>
              </Grid>
            )}
            <Grid item style={{marginLeft:'auto', marginRight:'auto'}}>
              <IconButton onClick={addPart}>
                <ControlPointIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}