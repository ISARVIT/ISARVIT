import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Questions from './Questions.js';
import Variables from './Variables.js';
import SVG from './SVG.js';
import Template from './Template.js';
import Publish from './Publish.js';

function ErrorCard(){
  return(
    <Grid item>
      There is an error with your forms creator. Please try moving back or forth, or contact the ISARVIT team
    </Grid>
  )
}

export default function Creator(props){
  const [creator, setCreator] = React.useState({
    card: 0,
    questions: [],
    outputs: [],
    nodes: [],
    template: '',
    svg: {
      base: '',
      parts: [],
      used_variables: [],
    }
  });
  const back=()=>{
    if(creator.card){
      setCreator({...creator, card: creator.card-1})
    }
    else{
      props.setControl({...props.control, view: 'user'})
    }
  }
  const forward=()=>{
    setCreator({...creator, card: creator.card+1})
  }
  const sendExtraProps = {...props, creator, setCreator}
  function renderStep(){
    switch(creator.card){
      case 0: return <Questions {...sendExtraProps}/>
      case 1: return <Variables {...sendExtraProps}/>
      case 2: return <SVG {...sendExtraProps}/>
      case 3: return <Template {...sendExtraProps}/>
      case 4: return <Publish {...sendExtraProps}/>
      default: return <ErrorCard />
    }
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem' }}>
      <Grid item xs={5} style={{width: '100%'}}>
        <Stepper activeStep={creator.card} alternativeLabel style={{ backgroundColor: "transparent" }}>
          <Step><StepLabel>Create Questions</StepLabel></Step>
          <Step><StepLabel>Create Variables</StepLabel></Step>
          <Step><StepLabel>Create SVG</StepLabel></Step>
          <Step><StepLabel>Create Template</StepLabel></Step>
          <Step><StepLabel>Publish</StepLabel></Step>
        </Stepper>
      </Grid>
      <Grid item xs={12}>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={back}>{creator.card?'Back':'Cancel'}</Button>
            <Button onClick={forward} disabled={creator.card>=4}>Continue</Button>
          </ButtonGroup>
      </Grid>
      {renderStep()}
    </Grid>
  )
}