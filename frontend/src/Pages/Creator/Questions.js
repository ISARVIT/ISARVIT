
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';
import React from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import TextFieldsIcon from '@material-ui/icons/TextFields';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ExposurePlus2Icon from '@material-ui/icons/ExposurePlus2';
import EventIcon from '@material-ui/icons/Event';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Typography from '@material-ui/core/Typography';

const typeOptions = [
  {label: 'Text', icon: <TextFieldsIcon/>},
  {label: 'Number', icon: <ExposurePlus2Icon/>},
  {label: 'Date', icon: <EventIcon/>},
  {label: 'Choice', icon: <RadioButtonCheckedIcon/>},
  {label: 'Multiple Choice', icon: <CheckBoxIcon/>},
]

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
    newQuestions[props.creator.questions.indexOf(props.question)].type = event.target.value
    props.setCreator({...props.creator, questions: newQuestions})
  }
  return (
    <Draggable draggableId={props.question.dragID} index={props.index}>
      {provided => (
        <Grid item xs={12}>
          <Paper elevation={3} style={{minWidth: '100%'}} ref={provided.innerRef} {...provided.draggableProps}>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Grid item {...provided.dragHandleProps} style={{marginLeft:'auto',marginRight:'auto',minHeight:'2rem'}}>
                <DragHandleIcon />
              </Grid>
              <Grid item xs={12} container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={8} style={{paddingLeft:'1rem',paddingRight:'3rem'}}>
                  <TextField fullWidth placeholder="Question" value={props.question.questionLabel} onChange={changeQuestion} variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                  <FormControl variant="outlined" fullWidth>
                    <Select value={props.question.type} onChange={changeType} renderValue={(selected)=>selected}>
                      <MenuItem value="" disabled>
                        Type
                      </MenuItem>
                      {typeOptions.map(type=>
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
                <Grid item xs={1}>
                  <Tooltip title="Delete Question">
                    <IconButton onClick={deleteQuestion}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{padding:'1rem'}}>
                <Typography>
                  Variable Name:
                </Typography>
                <TextField value={props.question.variable} onChange={changeVariable} placeholder="Variable Name" />
              </Grid>
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
    let newQuestion = {questionID: newQuestions.length, dragID: newQuestions.length.toString(), type:'Text', variable: 'var_'+newQuestions.length, questionLabel: ''};
    newQuestions.push(newQuestion);
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
    const newQuestions = reorder(props.creator.questions,result.source.index,result.destination.index);
    props.setCreator({...props.creator, questions: newQuestions});
  }
  return (
    <Grid item xs={4} spacing={3} container direction="column" justifyContent="flex-start" alignItems="stretch">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
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