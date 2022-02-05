import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, Background, Handle} from 'react-flow-renderer';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { EquationEvaluate, EquationOptions, defaultErrorHandler } from 'react-equation'
import { defaultVariables, defaultFunctions } from 'equation-resolver'

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  node: {
    border: '1px solid #1a192b',
    borderRadius: '5px',
    padding: '1rem',
    marginBottom: '1rem',
  },
  operationNode: {
    alignItems: 'center',
    border: '1px solid #1a192b',
    borderRadius: '2px',
    backgroundColor: 'white',
    padding: '0.2rem 2rem',
    cursor: 'grab',
    display: 'flex',
    justifyContent: 'center',
  }
}));

const operations = [
  {operationID: 0, variable: 'equation', operationLabel: 'Equation'},
  {operationID: 1, variable: 'conditional', operationLabel: 'If / Else'},
  
]
const toString = {operationID: 2, variable: 'to_string', operationLabel: 'toString'}

function OperationNode({ data, isConnectable }){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [equation, setEquation] = React.useState('');
  const [write, setWrite] = React.useState('');
  const openDialog=()=>{setOpen(true)}
  const closeDialog=()=>{setOpen(false)}
  const changeEquation=(event)=>{setEquation(event.target.value)}
  const changeWrite=(event)=>{setWrite(event.target.value)}
  return(
    <div className={classes.operationNode}>
      <Handle
        position="top"
        type="target"
        isConnectable={isConnectable}
      />
      <div>
        {data.variable}
        <Dialog onClose={closeDialog} open={open} fullWidth maxWidth='md'> 
          <DialogTitle>{data.operationLabel}</DialogTitle>
          {data.variable==='equation'?
            <DialogContent>
              <TextField value={equation} onChange={changeEquation} fullWidth required label="Equation" />
              <EquationOptions variables={defaultVariables} functions={defaultFunctions} errorHandler={defaultErrorHandler}>
                <EquationEvaluate value={equation!==''?equation:'0'}/>
              </EquationOptions>
            </DialogContent>
          :
            <DialogContent>
              <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item xs={3}>
                  <TextField value={equation} onChange={changeEquation} fullWidth required label="If Condition" />
                </Grid>
                <Grid item xs={9}>
                  <TextField value={write} onChange={changeWrite} fullWidth required label="Then Write" />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" color="primary" onClick={()=>alert("Not available in the moment")} size="small">
                    New if
                  </Button>
                </Grid>
              </Grid>
            </DialogContent>
          }
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={closeDialog} color="primary" autoFocus>
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <IconButton onClick={openDialog} size="small">
          <EditIcon/>
        </IconButton>
      </div>
      <Handle
        position="bottom"
        type="source"
        isConnectable={isConnectable}
      />
    </div>
  )
}

export default function Variables(props){
  const classes = useStyles();

  const [createOutput, setCreateOutput] = React.useState({open: false,name: ''});

  const reactFlowWrapper = React.useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = React.useState(null);
  const onConnect = (params)=>{
    let newNodes = props.creator.nodes
    let source = newNodes.filter(function(node){return params.source===node.id})[0]
    let sourceIndex = newNodes.indexOf(source)
    let target = newNodes.filter(function(node){return params.target===node.id})[0]
    let targetIndex = newNodes.indexOf(target)
    if(target.type==='default'){
      if(target.data.variable==='sum'){
        // newNodes[targetIndex].data.label = '1+1'
      }
    }
    newNodes = addEdge({...params, animated: true}, newNodes)
    props.setCreator({...props.creator, nodes: newNodes});
  }
  // const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => { event.preventDefault(); event.dataTransfer.dropEffect = 'move';};

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const varInfo = JSON.parse(event.dataTransfer.getData('application/reactflow'));
    const type = varInfo.nodeType;
    let label = varInfo.variable;
    const newNode = {id: props.creator.nodes.length.toString(), type, position, data: { label, ...varInfo },};
    let newNodes = props.creator.nodes 
    newNodes = newNodes.concat(newNode)
    props.setCreator({...props.creator, nodes: newNodes});
  };
  const onDragStart = (event, varInfo, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({nodeType, ...varInfo}));
    event.dataTransfer.effectAllowed = 'move';
  };
  const clearAll=()=>{
    props.setCreator({...props.creator, nodes: [], outputs: []})
  }
  const openCreate=()=>{
    setCreateOutput({open: true,variable: ''})
  }
  const handleChangeCreate=(event)=>{
    if(event.target.value===''){
      setCreateOutput({open: false,variable: ''})
    }
    else{
      setCreateOutput({...createOutput,name: event.target.value})
    }
    
  };
  const saveOutput=(event)=>{
    if(event.keyCode == 13){
      let newOutputs = props.creator.outputs;
      newOutputs.push({outputID: newOutputs.length, variable: createOutput.name})
      props.setCreator({...props.creator, outputs: newOutputs})
      setCreateOutput({open: false,variable: ''})
    }
  }
  return (
    <Grid item>
      <Paper elevation={3}>
        <Grid container direction="row" justifyContent="flex-start" alignItems="stretch" >
          <Grid item xs={3} >
            <Paper elevation={3} style={{height: '70vh'}}>
              <Button onClick={clearAll} style={{margin:'1rem'}} variant="outlined" color="primary">
                Clear all
              </Button>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Input</Typography>
                  <Typography className={classes.secondaryHeading}>Variables from questionary</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List style={{width: '100%'}} spacing={1}>
                    {props.creator.questions.map(question => 
                      <ListItem key={question.id} className={classes.node} style={{borderColor: '#0041d0'}} button onDragStart={(event) => onDragStart(event, question, 'input')} draggable>
                        {question.variable}
                      </ListItem>
                    )}
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Operations</Typography>
                  <Typography className={classes.secondaryHeading}>Change input into text</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List style={{width: '100%'}}>
                    {operations.map(operation => 
                      <ListItem key={operation.id} className={classes.node} button onDragStart={(event) => onDragStart(event, operation, 'operation')} draggable>
                        {operation.operationLabel}
                      </ListItem>
                    )}
                      <ListItem className={classes.node} button onDragStart={(event) => onDragStart(event, toString, 'default')} draggable>
                        {toString.operationLabel}
                      </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Output</Typography>
                  <Typography className={classes.secondaryHeading}>Variables for the Report</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List style={{width: '100%'}}>
                    {props.creator.outputs.map(output => 
                      <ListItem key={output.id} className={classes.node} style={{borderColor: '#ff0072'}} button onDragStart={(event) => onDragStart(event, output, 'output')} draggable>
                        {output.variable}
                      </ListItem>
                    )}
                    {createOutput.open?
                      <ListItem>
                        <TextField label="Name" color="secondary" value={createOutput.name} onChange={handleChangeCreate} onKeyDown={saveOutput}/>
                      </ListItem>
                    :
                      <ListItem button onClick={openCreate} style={{color: '#ff0072'}}>
                        Create Variable
                      </ListItem>
                    }
                  </List>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>
          <Grid item xs={9}  style={{width: '70vw'}}  ref={reactFlowWrapper}>
            <ReactFlowProvider>
              <ReactFlow
                elements={props.creator.nodes}
                onConnect={onConnect}
                onLoad={onLoad}
                onDrop={onDrop}
                nodeTypes={{operation: OperationNode}}
                defaultZoom={1.5}
                onDragOver={onDragOver}
              >
                <Controls />
                <Background color="#aaa" gap={16} />
              </ReactFlow>
            </ReactFlowProvider>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
