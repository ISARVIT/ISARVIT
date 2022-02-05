import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import PublishIcon from '@material-ui/icons/Publish';

import InlineSVG from 'svg-inline-react';


import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import CreateIcon from '@material-ui/icons/Create';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import MenuItem from '@material-ui/core/MenuItem';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function Part(props){
  function removePart(partID){
    let newSVG = props.creator.svg;
    newSVG.parts = newSVG.parts.filter(function(part){return part.partID !== partID})
    props.setCreator({...props.creator, svg: newSVG})
  }
  function changePart(part, event, bool){
    let newSVG = props.creator.svg;
    let index = newSVG.parts.indexOf(part);
    if(index !== -1){
      if(bool){
        newSVG.parts[index].valueTrue = event.target.value;
      }
      else{
        newSVG.parts[index].valueFalse = event.target.value;
      }
    }
    props.setCreator({...props.creator, svg: newSVG})
  }
  function changeOutputID(part, event){
    let newSVG = props.creator.svg;
    let index = newSVG.parts.indexOf(part);
    if(index !== -1){
      newSVG.parts[index].outputID = event.target.value
    }
    props.setCreator({...props.creator, svg: newSVG})
  }
  return(
    <Draggable draggableId={props.part.dragID} index={props.index}>
      {provided => (
        <Grid item container spacing={1} container direction="row" justifyContent="center" alignItems="center" ref={provided.innerRef} {...provided.draggableProps}>
          <Grid item xs={4} container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={4} {...provided.dragHandleProps}>
              <IconButton size='small'>
                <DragIndicatorIcon/>
              </IconButton>
              <IconButton size='small' onClick={()=>removePart(props.part.partID)}>
                <ClearIcon />
              </IconButton>
            </Grid>
            <Grid item xs={7}>
              <Select fullWidth value={props.part.outputID} onChange={(event)=>changeOutputID(props.part,event)}>
                <MenuItem value={-1}><em>Always True</em></MenuItem>
                {props.creator.outputs.map(variable=><MenuItem value={variable.outputID}>{variable.variable}</MenuItem>)}
              </Select>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <TextField value={props.part.valueTrue} multiline onChange={(event)=>changePart(props.part,event,true)} fullWidth placeholder='True' />
            {props.part.outputID===-1?null:
              <TextField value={props.part.valueFalse} multiline onChange={(event)=>changePart(props.part,event,false)} fullWidth placeholder='False' />
            }
          </Grid>
        </Grid>
      )}
    </Draggable>
  )
}

export default function SVG(props){
  const [tab,setTab] = React.useState(0);
  const changeBase=(event)=>{
    let newSVG = props.creator.svg;
    newSVG.base = event.target.value;
    props.setCreator({...props.creator, svg: newSVG})
  };
  function buildSVG(){
    SVG = props.creator.svg.base;
    SVG += props.creator.svg.parts.map(part=>(part.outputID!==-1&&!part.show)?part.valueFalse:part.valueTrue).join("")
    return SVG+'</svg>'
  }
  const addPart=()=>{
    let newSVG = props.creator.svg;
    newSVG.parts.push({partID: newSVG.parts.length, dragID: newSVG.parts.length.toString(), show: true, outputID: -1, valueTrue: '', valueFalse: ''})
    props.setCreator({...props.creator, svg: newSVG})
  }
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  function onDragEnd(result) {
    if(!result.destination){return}
    if(result.destination.index === result.source.index){return}
    let newSVG = props.creator.svg;
    newSVG.parts = reorder(newSVG.parts,result.source.index,result.destination.index);
    props.setCreator({...props.creator, svg: newSVG});
  }
  const changeTab=(event, newTab)=>{setTab(newTab)};
  function changeSwitch(part,event){
    let newSVG = props.creator.svg;
    let index = newSVG.parts.indexOf(part);
    if(index !== -1){
      newSVG.parts[index].debug = event.target.checked
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
      <Grid item xs={6} container direction="column" justifyContent="center" alignItems="stretch">
        <Grid item xs={12} style={{marginLeft:'auto', marginRight: 'auto'}}>
          <Tabs value={tab} onChange={changeTab}  indicatorColor="primary" textColor="primary" style={{marginLeft:'auto', marginRight:'auto'}}>
            <Tab label="Create"/>
            <Tab label="Test"/>
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <Paper xs={12} style={{ padding:'2rem'}} elevation={3}>
            <Grid container xs={12} spacing={2} direction="column" justifyContent="flex-start" alignItems="stretch">
              <Grid item style={{marginLeft:'auto', marginRight:'auto', border:'thin solid gray', borderRadius:'10px'}}>
                <InlineSVG src={buildSVG()}/>
              </Grid>
              {!tab?
                <React.Fragment>
                  <Grid item xs={12}>
                    <TextField fullWidth value={props.creator.svg.base} multiline onChange={changeBase} fullWidth label="Base (start with <svg>...)" />
                  </Grid>
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="svgparts">
                      {provided => (
                        <Grid item xs={12} spacing={4} container direction="column" justifyContent="flex-start" alignItems="strech" ref={provided.innerRef} {...provided.droppableProps}>
                          {props.creator.svg.parts.map((part, index)=>
                            <Part {...props} part={part} index={index} key={part.dragID} />
                          )}
                          {provided.placeholder}
                        </Grid>
                      )}
                    </Droppable>
                    <Grid item style={{marginLeft:'auto', marginRight:'auto'}}>
                      <IconButton onClick={addPart}>
                        <ControlPointIcon />
                      </IconButton>
                    </Grid>
                  </DragDropContext>
                </React.Fragment>
              :
                props.creator.svg.parts.map(part=>
                  part.outputID===-1? null:
                    <Grid item xs={12}>
                      {props.creator.outputs.find(output => part.outputID === output.outputID).variable} 
                      <Switch checked={part.debug} onChange={(event)=>changeSwitch(part,event)}/>
                    </Grid>
                )
              }
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}