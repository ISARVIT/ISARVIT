import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';

import Survey from "material-survey/components/Survey"
import Download from './Download.js';

export default function Form(props){
  const [answers, setAnswers] = React.useState({
    step: 0,
    answers: {...props.control.QRData},
    questions: props.example.forms[props.control.formID],
  });
  const saveAnswers=(newAnswers)=>{
    setAnswers({...answers, step:1, answers: newAnswers})
  }
  const back=()=>{
    if(answers.step){
      setAnswers({...answers, step: answers.step-1})
    }
    else{
      props.setControl({...props.control, view: 'user'})
    }
  }
  const sendExtraProps = {...props, answers, setAnswers}
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem', }}>
      <Grid item xs={3} style={{width: '100%'}}>
        <Stepper activeStep={answers.step} alternativeLabel style={{ backgroundColor: "transparent" }}>
          <Step><StepLabel>Answer Forms</StepLabel></Step>
          <Step><StepLabel>Verify and Download</StepLabel></Step>
        </Stepper>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" size="small" onClick={back}>{answers.step?'Back':'Cancel'}</Button>
      </Grid>
      {answers.step?
        <Download {...sendExtraProps} />
      :
        <Grid item xs={12}>
          <Survey form={answers.questions} defaultAnswers={answers.answers} autocompleteRequest={function noRefCheck() {}} onFinish={saveAnswers}/>
        </Grid>
      }
    </Grid>
  )
} 