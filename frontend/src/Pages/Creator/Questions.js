
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import React from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import RootRef from '@material-ui/core/RootRef';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Link from '@material-ui/core/Link';
import FormGroup from '@material-ui/core/FormGroup';

import TextFieldsIcon from '@material-ui/icons/TextFields';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

import ExposurePlus2Icon from '@material-ui/icons/ExposurePlus2';
import EventIcon from '@material-ui/icons/Event';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import LoopIcon from '@material-ui/icons/Loop';
import PostAddIcon from '@material-ui/icons/PostAdd';

import ClearIcon from '@material-ui/icons/Clear';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import Typography from '@material-ui/core/Typography';

const typeOptions = [
  {label: 'Text', icon: <TextFieldsIcon/>},
  {label: 'Number', icon: <ExposurePlus2Icon/>},
  {label: 'Choice', icon: <RadioButtonCheckedIcon/>},
  {label: 'Multiple Choice', icon: <CheckBoxIcon/>},
]
const otherOptions = [
  {label: 'Page', icon: <PostAddIcon/>},
  {label: 'Loop', icon: <LoopIcon/>},
]

const otherOptionsSet = new Set(otherOptions.map(option=>option.label))
function checkOther(type){
  return otherOptionsSet.has(type)
}

function Question(props) {
  const deleteQuestion=(event)=>{
    event.preventDefault();
    let newQuestions = props.creator.questions
    newQuestions.splice(props.creator.questions.indexOf(props.question), 1)
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeQuestion=(event)=>{
    let newQuestions = props.creator.questions
    let newVariable = event.target.value.toLowerCase().replace(/\s/g, '_').replace(/[^a-z0-9_]/gi,'');
    newQuestions[props.creator.questions.indexOf(props.question)].questionLabel = event.target.value
    newQuestions[props.creator.questions.indexOf(props.question)].variable = newVariable
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeVariable=(event)=>{
    let treatedText = event.target.value.replace(/[^a-z0-9_]/gi,'');
    let newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].variable = treatedText
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeType=(event)=>{
    let newQuestions = props.creator.questions
    // Resets information except if its choice <-> multiple choice, then conserves choice vector.
    let newChoices = []
    let varName = props.question.variable
    if(props.question.type==='Choice'||props.question.type==='Multiple Choice'){
      newChoices = newQuestions[props.creator.questions.indexOf(props.question)].choices
    }
    if(event.target.value==='Loop'){
      varName = 'loopID_'+props.question.questionID
    }
    else if(event.target.value==='Page'){
      varName = 'pageID_'+props.question.questionID
    }
    newQuestions[props.creator.questions.indexOf(props.question)] = {...newQuestions[props.creator.questions.indexOf(props.question)], type:event.target.value, variable: varName, loopvar: false,  default: null, min: null, max: null, others: false, qchoices: 0, choices: newChoices};
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeRequired=(event)=>{
    let newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].required = event.target.checked
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const addOthers=()=>{
    let newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].others = true
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeDefault=(event,type,choiceID)=>{
    let newQuestions = props.creator.questions
    if(event.target.value!==''){
      if(type==='Number'){
        if(!isNaN(Number(event.target.value))){
          newQuestions[props.creator.questions.indexOf(props.question)].default = Number(event.target.value);
        }
      }
      else if(type==='Choice'){
        if(newQuestions[props.creator.questions.indexOf(props.question)].default === Number(choiceID)){
          newQuestions[props.creator.questions.indexOf(props.question)].default = null;
        }
        else{
          newQuestions[props.creator.questions.indexOf(props.question)].default = Number(choiceID);
        }
      }
      else if(type==='Multiple Choice'){
        if(newQuestions[props.creator.questions.indexOf(props.question)].default === null){
          newQuestions[props.creator.questions.indexOf(props.question)].default = (new Set()).add(choiceID)
        }
        else if(newQuestions[props.creator.questions.indexOf(props.question)].default.has(choiceID)){
          newQuestions[props.creator.questions.indexOf(props.question)].default.delete(choiceID)
        }
        else{
          newQuestions[props.creator.questions.indexOf(props.question)].default.add(choiceID)
        }
      }
      else if(type==='Text'){
        newQuestions[props.creator.questions.indexOf(props.question)].default = event.target.value;
      }
    }
    else{
      newQuestions[props.creator.questions.indexOf(props.question)].default = null;
    }
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const removeOthers=()=>{
    let newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].others = false
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeLoopvar=(event)=>{
    let newQuestions = props.creator.questions
    newQuestions[props.creator.questions.indexOf(props.question)].loopvar = event.target.value;
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const changeMinMax=(event)=>{
    let newQuestions = props.creator.questions
    if(event.target.value!==''){
      newQuestions[props.creator.questions.indexOf(props.question)][event.target.name] = event.target.value;
    }
    else{
      newQuestions[props.creator.questions.indexOf(props.question)][event.target.name] = null
    }
    props.setCreator({...props.creator, questions: newQuestions})
  }
  const addChoice=()=>{
    let newQuestions = props.creator.questions;
    let index = newQuestions.indexOf(props.question);
    let newChoice = {choiceID: newQuestions[index].qchoices, dragID: newQuestions[index].qchoices.toString(), text:'Option '+newQuestions[index].qchoices};
    newQuestions[index].choices.push(newChoice);
    newQuestions[index].qchoices = newQuestions[index].qchoices+1;
    props.setCreator({...props.creator, questions: newQuestions})
  }
  function deleteChoice(choice,event){
    let newQuestions = props.creator.questions
    let index = props.creator.questions.indexOf(props.question)
    newQuestions[index].choices.splice(newQuestions[index].choices.indexOf(choice), 1)
    props.setCreator({...props.creator, questions: newQuestions})
  }
  function changeChoice(choice,event){
    let newQuestions = props.creator.questions
    let questionIndex = newQuestions.indexOf(props.question)
    let choiceIndex = newQuestions[questionIndex].choices.indexOf(choice)
    newQuestions[questionIndex].choices[choiceIndex].text = event.target.value
    props.setCreator({...props.creator, questions: newQuestions})
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
    let newQuestions = props.creator.questions;
    let index = newQuestions.indexOf(props.question);
    newQuestions[index].choices = reorder(newQuestions[index].choices,result.source.index,result.destination.index);
    props.setCreator({...props.creator, questions: newQuestions});
  }
  return (
    <Draggable draggableId={props.question.dragID} index={props.index}>
      {provided => (
        <Grid item xs={12} ref={provided.innerRef} {...provided.draggableProps}>
          <Paper elevation={checkOther(props.question.type)?0:3} style={checkOther(props.question.type)?{backgroundColor:'transparent'}:null}>
            <Grid xs={12} container direction="column" justifyContent="flex-start" alignItems="stretch"  style={{padding:'0 2rem 0 2rem'}}>
              <Grid item {...provided.dragHandleProps} style={{marginLeft:'auto',marginRight:'auto',minHeight:'2rem'}}>
                <DragHandleIcon />
              </Grid>
              <Grid item xs={12} container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={9} style={{paddingRight:'3rem'}}>
                  <TextField fullWidth placeholder={props.question.type==="Page"?"Page Title":props.question.type==="Loop"?"Loop Title":"Question"} value={props.question.questionLabel} onChange={changeQuestion} variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                  <FormControl variant="outlined" fullWidth>
                    <Select value={props.question.type} onChange={changeType} renderValue={(selected)=>selected}>
                      <MenuItem value="" disabled>
                        Input
                      </MenuItem>
                      {typeOptions.map(type=>
                        <MenuItem key={type.label} value={type.label}>
                          <ListItemIcon>
                            {type.icon}
                          </ListItemIcon>
                          <ListItemText primary={type.label}/>
                        </MenuItem>
                      )}
                      <MenuItem value="others" disabled>
                        Others
                      </MenuItem>
                      {otherOptions.map(type=>
                        <MenuItem key={type.label} value={type.label}>
                          <ListItemIcon>
                            {type.icon}
                          </ListItemIcon>
                          <ListItemText primary={type.label}/>
                        </MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item xs={12} spacing={1} container direction="row" justifyContent="flex-start" alignItems="center" style={{padding:'1rem 0 1rem 0'}}>
                {props.question.type==='Loop'?
                  <React.Fragment>
                    <Grid item xs={3}>
                      <FormControlLabel value="start" control={<Switch color="primary" value={props.question.required} onChange={changeRequired} />} label={props.question.required?"Variable":"Range"} labelPlacement="end"/>
                    </Grid>
                    <Grid item xs={3}>
                      {props.question.required?
                        <Select fullWidth value={props.question.loopvar} onChange={changeLoopvar}>
                          {props.creator.questions.slice(0,props.creator.questions.indexOf(props.question)).map(question=>
                            <MenuItem key={question.questionID} value={question.questionID}>
                              <ListItemText primary={question.variable}/>
                            </MenuItem>
                          )}
                        </Select>
                      :
                        <Input fullWidth value={props.question.max} name="max" onChange={changeMinMax} type="number" placeholder="Number of times"/>
                      }
                    </Grid>
                  </React.Fragment>
                :props.question.type==='Number'?
                  <React.Fragment>
                    <Grid item xs={3}>
                      <Input fullWidth value={props.question.min} name="min" onChange={changeMinMax} type="number" placeholder="No min"/>
                    </Grid>
                    <Grid item xs={3}>
                      <Input fullWidth value={props.question.max} name="max" onChange={changeMinMax} type="number" placeholder="No max"/>
                    </Grid>
                    <Grid item xs={6}/>
                    <Grid item xs={6}>
                      <Input fullWidth value={props.question.default} onChange={(event)=>changeDefault(event,props.question.type,-1)} type="number" placeholder="Default"/>
                    </Grid>
                  </React.Fragment>
                :props.question.type==='Text'?
                  <Grid item xs={6}>
                    <TextField fullWidth value={props.question.default} onChange={(event)=>changeDefault(event,props.question.type,-1)} placeholder="Default"/>
                  </Grid>
                :props.question.type==='Choice'||props.question.type==='Multiple Choice'?
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId={"choices_0"}>
                      {(provided) => (
                        <List dense ref={provided.innerRef}>
                          {props.question.choices.map((choice,index)=>
                            <Draggable draggableId={choice.dragID} index={index} key={choice.choiceID}>
                              {provided => (
                                <ListItem ContainerComponent="li" ref={provided.innerRef} {...provided.draggableProps}>
                                  <ListItemIcon>
                                    <IconButton size="small" {...provided.dragHandleProps}>
                                      <DragIndicatorIcon />
                                    </IconButton>
                                    <IconButton size="small" onClick={(event)=>deleteChoice(event,choice)}>
                                      <ClearIcon />
                                    </IconButton>
                                    {props.question.type==='Choice'?
                                      <IconButton size="small" onClick={(event)=>changeDefault(event,props.question.type,choice.choiceID)}>
                                        {props.question.default===choice.choiceID?<RadioButtonCheckedIcon/>:<RadioButtonUncheckedIcon/>}  
                                      </IconButton>
                                    :
                                      <IconButton size="small" onClick={(event)=>changeDefault(event,props.question.type,choice.choiceID)}>
                                        {props.question.default&&props.question.default.has(choice.choiceID)?<CheckBoxIcon />:<CheckBoxOutlineBlankIcon/>}
                                      </IconButton>
                                    }
                                  </ListItemIcon>
                                  <ListItemText primary={<TextField value={choice.text} onChange={event=>changeChoice(choice,event)} />} />
                                </ListItem>
                              )}
                            </Draggable>
                          )}
                          {provided.placeholder}
                          {!props.question.others? null:
                            <ListItem ContainerComponent="li" >
                              <ListItemIcon>
                                  <IconButton size="small" disabled>
                                    <DragIndicatorIcon />
                                  </IconButton>
                                  <IconButton size="small" onClick={removeOthers}>
                                    <ClearIcon />
                                  </IconButton>
                                  <IconButton size="small" disabled>
                                    {props.question.type==='Choice'?<RadioButtonUncheckedIcon/>:<CheckBoxOutlineBlankIcon/>}
                                  </IconButton>
                              </ListItemIcon>
                              <ListItemText primary={<TextField value="Others" disabled />}/>
                            </ListItem>
                          }
                          <ListItem>
                            <ListItemText primary={<span><Link component="button" onClick={addChoice}>Add Option</Link> or <Link component="button" onClick={addOthers}>Add 'Others'</Link></span>} />
                          </ListItem>
                        </List>
                      )}
                    </Droppable>
                  </DragDropContext>
                :null
                }
              </Grid>
            </Grid>
            <Divider />
            <Grid item xs={12} container direction="row" justifyContent="flex-start" alignItems="center" style={{paddingLeft:'2rem'}}>
              <Grid item xs={checkOther(props.question.type)?2:4}>
                {checkOther(props.question.type)?<TextField fullWidth disabled value={props.question.variable}/>:<TextField fullWidth value={props.question.variable} onChange={changeVariable} placeholder="Variable Name" helperText="Variable Name" />}
              </Grid>
              <FormGroup row style={{marginLeft:'auto',padding:'0.3rem'}}>
                {checkOther(props.question.type)?null:<FormControlLabel value="start" control={<Switch color="primary" value={props.question.required} onChange={changeRequired} />} label={(props.question.required?"":"Not ")+ "Required"} labelPlacement="start"/>}
                <Tooltip title="Delete Question">
                  <IconButton onClick={deleteQuestion}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </FormGroup>
            </Grid>
          </Paper>
        </Grid>
      )}
    </Draggable>
  );
}

export default function Questions(props){
  const addQuestion=()=>{
    let newQuestions = props.creator.questions
    let newQuestion = {questionID: props.creator.qlength, dragID: props.creator.qlength.toString(), type:'Text', variable: 'var_'+props.creator.qlength, questionLabel: '', required: false, default: null, min: null, max: null, loopvar: false, others: false, qchoices: 0, choices: []};
    newQuestions.push(newQuestion);
    props.setCreator({...props.creator, qlength: props.creator.qlength+1, questions: newQuestions})
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
    const newQuestions = reorder(props.creator.questions,result.source.index,result.destination.index);
    newQuestions[result.destination.index].loopvar = null;
    props.setCreator({...props.creator, questions: newQuestions});
  }
  return (
    <Grid item xs={5} spacing={3} container direction="column" justifyContent="flex-start" alignItems="stretch">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="questions">
          {provided => (
            <Grid item xs={12} spacing={4} container direction="column" justifyContent="flex-start" alignItems="strech" ref={provided.innerRef} {...provided.droppableProps}>
              {props.creator.questions.map((question, index) => (
                <Question {...props} question={question} index={index} key={question.dragID} />
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
        <Grid item style={{marginLeft:'auto',marginRight:'auto'}}>
          <IconButton onClick={addQuestion}>
            <ControlPointIcon style={{ fontSize: 40 }} />
          </IconButton>
        </Grid>
      </DragDropContext>
    </Grid>
  )
}