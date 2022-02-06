import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactFlow, { ReactFlowProvider, addEdge, isEdge, getConnectedEdges, ControlButton, removeElements, Controls, Background, Handle} from 'react-flow-renderer';
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


import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { FixedSizeList } from 'react-window';
import DeleteIcon from '@material-ui/icons/Delete';
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
  {operationID: 0, draggable:true, variable: 'equation_', type:'Number', equation:'', equationVars: {}, operationLabel: 'Equation'},
  {operationID: 1, draggable:true, variable: 'conditional_', inputType:'Text', type:'Text', operationLabel: 'Conditional', cond: '==', inputVar: null, inputID: null},
]
const conditionals = {
  Number: ["==",">=",">","<","<=","!="],
  Text: ["=="],
}
const debugOp = {operationID: 100, variable: 'debug_op', operationLabel: 'Debug'}

function OperationNode(props){
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
      <Handle position="top" type="target" isConnectable={props.isConnectable}/>
      <div>
        {props.data.variable} {props.data.operationLabel==='Conditional'?<span style={{fontSize:'0.4rem'}}>({props.data.inputType+'→'+props.data.type})</span>:null}
        <Dialog onClose={closeDialog} open={open} fullWidth maxWidth='md'> 
          <DialogTitle>{props.data.operationLabel} {props.data.operationLabel==='Conditional'?<span>({props.data.inputType+'→'+props.data.type})</span>:null}</DialogTitle>
          {props.data.operationLabel==='Equation'?
            <DialogContent>
              Available Variables: {Object.keys(props.data.equationVars).join(', ')}
              <TextField value={equation} onChange={changeEquation} fullWidth required label="Equation" />
              <EquationOptions variables={props.data.equationVars} functions={defaultFunctions} errorHandler={defaultErrorHandler}>
                <EquationEvaluate value={equation!==''?equation:'0'}/>
              </EquationOptions>
            </DialogContent>
          :
            <DialogContent>
              {props.data.inputVar?null:'Add input variable!'}
              <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
                <Grid item xs={2}>
                  <TextField value={props.data.inputVar} fullWidth disabled placeholder="Variable" />
                </Grid>
                <Grid item xs={1}>
                  <Select fullWidth value={props.data.cond} >
                    {conditionals[props.data.inputType].map(cond=>
                      <MenuItem value={cond} key={cond}>
                        {cond}
                      </MenuItem>  
                    )}
                  </Select>
                </Grid>
                <Grid item xs={1}>
                  <TextField value={equation} onChange={changeEquation} fullWidth required placeholder="condition" />
                </Grid>
                <Grid item xs={12}>
                  <TextField value={write} onChange={changeWrite} fullWidth required placeholder="Write" />
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
          <EditIcon style={{fontSize:'1rem'}}/>
        </IconButton>
      </div>
      <Handle
        position="bottom"
        type="source"
        isConnectable={props.isConnectable}
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
    let valid = null;
    // console.log(source.data.type,target.data.variable)
    if(target.data.operationLabel==='Equation'){
      if(source.data.type==='Number'||source.data.operationLabel==='Equation'){
        valid = {...params, animated: true};
        newNodes[targetIndex].data.equationVars[source.data.variable] = { type: 'number'};  
      }
      else{
        props.setAlert({open: true, text: "Equation must receive number", severity: "error"})
      }
    }
    else if(target.data.operationLabel==='Conditional'){
      if(source.data.type==='Number'||source.data.operationLabel==='Equation'){
        valid = {...params, animated: true};
        newNodes[targetIndex].data.inputType='Number';
        newNodes[targetIndex].data.inputVar=source.data.variable;
        newNodes[targetIndex].data.inputID=source.data.questionID;
      }
    }

    // if(source.data.variable==='equation'){
    //   valid = {...params, animated: true};
    //   newNodes[sourceIndex].data.equationVars[target.data.variable] = { type: 'number'}
    // }
    if(valid){
      newNodes = addEdge(valid, newNodes)
      props.setCreator({...props.creator, nodes: newNodes});
    }
    else{
      
    }
  }
  // const onElementsRemove = (elementsToRemove) => {
  //   props.setCreator({...props.creator, nodes: removeElements(elementsToRemove, props.creator.nodes)});
  // }
  // const onClickElement = React.useCallback((event, element) => {
  //   props.setCreator({...props.creator, selnode: [element]});
  // }, [])
  // const onNodeDragStop = (event, node) => console.log('drag stop', node);
  // const onClickElement = (event, element) => console.log('click', element);
  // const onClickElementDelete = React.useCallback(() => {
  //   const edges = props.creator.nodes.filter((element) => isEdge(element))
  //   const edgesToRemove = getConnectedEdges(props.creator.selnode, edges)
  //   onElementsRemove([...props.creator.selnode, ...edgesToRemove])
  // }, [props.creator.nodes, onElementsRemove, props.creator.selnode]);
  const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);
  const onDragOver = (event) => { event.preventDefault(); event.dataTransfer.dropEffect = 'move';};

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    let varInfo = JSON.parse(event.dataTransfer.getData('application/reactflow'));
    const type = varInfo.nodeType;
    if(type==='operation'){
      varInfo.variable += props.creator.qnodes
    }
    let label = varInfo.variable + ' ('+varInfo.type+')';
    const newNode = {id: props.creator.qnodes.toString(), type, position, data: { label, ...varInfo },};
    let newNodes = props.creator.nodes;
    newNodes = newNodes.concat(newNode);
    props.setCreator({...props.creator, nodesUsedIDs: props.creator.nodesUsedIDs.add(varInfo.questionID), qnodes: props.creator.qnodes+1,  nodes: newNodes});
  };
  const onDragStart = (event, varInfo, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({nodeType, ...varInfo}));
    event.dataTransfer.effectAllowed = 'move';
  };
  const clearAll=()=>{
    props.setCreator({...props.creator, qnodes:0, nodesUsedIDs: new Set(), nodes: [], outputs: []})
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
                      props.creator.nodesUsedIDs.has(question.questionID)?null:
                        <ListItem key={question.id} className={classes.node} style={{borderColor: '#0041d0'}} button onDragStart={(event) => onDragStart(event, question, 'input')} draggable>
                          {question.variable} ({question.type})
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
                  <List style={{width: '100%', maxHeight: 300}}>
                    {operations.map(operation => 
                      <ListItem key={operation.id} className={classes.node} button onDragStart={(event) => onDragStart(event, operation, 'operation')} draggable>
                        {operation.operationLabel}
                      </ListItem>
                    )}
                      {/* <ListItem className={classes.node} button onDragStart={(event) => onDragStart(event, debugOp, 'default')} draggable>
                        {debugOp.operationLabel}
                      </ListItem> */}
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
                // onElementClick={onClickElement}
                // onNodeDragStop={onNodeDragStop}
                nodeTypes={{operation: OperationNode}}
                defaultZoom={1.5}
                // onElementClick={onClickElement}
                onDragOver={onDragOver}
              >
                <Controls showInteractive={false}>
                  {/* <ControlButton onClick={onClickElementDelete}>
                    <DeleteIcon />
                  </ControlButton> */}
                </Controls>
                <Background color="#aaa" gap={16} />
              </ReactFlow>
            </ReactFlowProvider>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
