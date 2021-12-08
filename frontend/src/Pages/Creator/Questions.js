import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Questions from './Questions.js';

var parse = require('html-react-parser');



export default function Text(props){
    const [t,setT] = React.useState('');
    const handle = (event) => {
        var text=event.target.value;

        if(text.indexOf("My name")>-1){
            text=text.replace("My name", "<span class='blue'>My name</span>");
        }
    
        if(text.indexOf("my age")>-1){
            text=text.replace("my age", "<span class='blue'>my age</span>");
        }
    
        document.getElementById("colorText").innerHTML=text;
    }
    return (
        <>
            <textarea onKeyUp={handle}></textarea>
            <div id="colorText"></div>
        </>
    )
}