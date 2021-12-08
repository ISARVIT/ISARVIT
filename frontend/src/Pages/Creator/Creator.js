import React from 'react';

import Grid from '@material-ui/core/Grid';

import Forms from './Forms.js';
import AddField from './AddField.js';
import Text from './Text.js';

export default function Creator(){
    const [info, setInfo] = React.useState({
        exam_name: '',
        questions: [],
    });
    const sendProps = {info, setInfo};
    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
            <Forms {...sendProps} />
            <AddField {...sendProps} />
            <Text {...sendProps}/>
        </Grid>
    )
}