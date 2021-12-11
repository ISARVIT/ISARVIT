import React from 'react';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import JoditEditor from "jodit-react";
import Questions from './Questions.js';



export default function Text(props){
	const editor = React.useRef(null)
	const [content, setContent] = React.useState('')

	const config = {
        readonly: false,
        extraButtons: [
            {
                name: 'Var',
                iconURL: 'http://xdsoft.net/jodit/logo.png',
                list: {
                    double:'Variable 1',
                    single:'Variable 2',
                    none:'Variable 3'
                },
                exec: function(editor, t, {control}) {
                    console.log(control.args);
                    editor.s.insertHTML('<span>['+control.args+']</span>');
                },
                template: (editor, key, value) => {
                    return '<span>'+value+'</span>';
                }
            }
        ],
      }

    return (
        <Grid item style={{width:'80vw',height:'80vh'}}>
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		        tabIndex={1} // tabIndex of textarea
		        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
        </Grid>
    )
}