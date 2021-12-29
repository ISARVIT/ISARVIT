import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import FormBuilder from 'react-form-creator'

import Questions from './Questions.js';

export default function Creator(props){
  const [card, setCard] = React.useState(0);
  const [forms, setForms] = React.useState(null);
  const inputRef = React.useRef(null);
  const click = () => {
    console.log(inputRef.current.getJson());
    setForms(inputRef.current.getJson());
    setCard(1);
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem', }}>
      <Grid item xs={4} style={{width: '100%'}}>
        <Stepper activeStep={card} alternativeLabel>
          <Step>
            <StepLabel>Create Questions</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create Variables</StepLabel>
          </Step>
          <Step>
            <StepLabel>Connect Variables</StepLabel>
          </Step>
          <Step>
            <StepLabel>Create Template</StepLabel>
          </Step>
          <Step>
            <StepLabel>Publish</StepLabel>
          </Step>
        </Stepper>
      </Grid>
        {card===0?
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={3} style={{padding: '2rem'}}>
                <Grid item>
                    <FormBuilder ref={inputRef}/>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={click}>
                        Continue
                    </Button>
                </Grid>
            </Grid>
        :card===1?
            <>
            {JSON.stringify(forms)}
            <Questions/>
            </>
        :
        <Grid container direction="column" justifyContent="space-around" alignItems="space-around" spacing={3} style={{padding: '2rem'}} xs>
            
        </Grid>
        }
    </Grid>
  )
}