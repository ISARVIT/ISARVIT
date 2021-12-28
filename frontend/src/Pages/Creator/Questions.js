import React from 'react';

import Grid from '@material-ui/core/Grid';

import JoditEditor from "jodit-react";

// class MedVar extends HTMLElement {
//     constructor() {
//         super();
//         this.style = "border-radius: 5px; padding:2px; cursor: pointer;"
//         this.addEventListener('click', e => {
//             alert("hey!")
//         });
//     }
// }
// customElements.define('med-var', MedVar);

export default function Text(props){
	const editor = React.useRef(null)
	const [content, setContent] = React.useState('')

	const config = {
        readonly: false,
        extraButtons: [
            {
                name: 'Var',
                iconURL: 'http://xdsoft.net/jodit/logo.png',
                list: [
                    {value: 'Name', color:'#800000', text: 'Le patient est malade'},
                    {value: 'ID', color:'#008000', text: 'Presence de lesions diverses'},
                ],
                exec: function(editor, t, {control}) {
                    // const node = document.createElement("med-var");
                    // node.innerHTML = 'oi'
                    
                    let data = control.args[0];
                    editor.s.insertHTML('<span style="color: red; border: thin solid red; border-radius: 1px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">'+data.value+'</span>')
                    // editor.s.insertHTML(node)
                    // editor.s.insertHTML('<med-var style="border:thin solid '+data.color+'; border-radius: 5px; color:'+data.color+'; padding:2px; cursor: pointer;">'+data.value+'</med-var>');
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