import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import FormBuilder from 'react-form-creator'


import Forms from './Forms.js';
import AddField from './AddField.js';
import Text from './Text.js';
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
        <Grid container direction="row" grid-auto-rows='1fr'>
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