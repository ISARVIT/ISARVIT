import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Questions from './Questions.js';

export default function Text(props){
    return (
        <Grid item container direction="column" justifyContent="flex-start" alignItems="center">
            <Grid item>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item>
                <Questions />
            </Grid>
        </Grid>  
    )
}