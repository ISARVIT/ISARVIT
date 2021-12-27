import React from 'react';

import Grid from '@material-ui/core/Grid';

import Forms from './Forms.js';
import AddField from './AddField.js';
import Text from './Text.js';
import Questions from './Questions.js';

export default function Creator(){
    const [info, setInfo] = React.useState({
        exam_name: '',
        questions: [],
    });
    const sendProps = {info, setInfo};
    return (
        <Grid container direction="row" grid-auto-rows='1fr'>
            <Grid container direction="column" justifyContent="space-around" alignItems="space-around" spacing={3} style={{padding: '2rem'}} xs>
                <AddField {...sendProps} />
                <AddField {...sendProps} />
            </Grid>
            <Grid container direction="column" justifyContent="space-around" alignItems="space-around" spacing={3} style={{padding: '2rem'}} xs>
                <Questions {...sendProps}/>
            </Grid>
        </Grid>
    )
}