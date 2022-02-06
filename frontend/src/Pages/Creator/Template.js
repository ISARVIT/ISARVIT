
import Grid from '@material-ui/core/Grid';
import JoditEditor from "jodit-react";
import React from 'react';
import Paper from '@material-ui/core/Paper';

export default function Template(props){
	const editor = React.useRef(null)
	const config = {
        height: "100%",
        toolbarAdaptive: false,
        readonly: false,
        extraButtons: [
            {
                name: 'Output Variables',
                iconURL: 'http://xdsoft.net/jodit/logo.png',
                list: props.creator.outputs.map(x => x.variable),
                exec: function(editor, t, {control}) {
                  if(control.args){
                    let key = control.args[0];
                    editor.s.insertHTML('<span style="color: red; border: thin solid red; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">'+key+'</span>')
                  }
                },
                template: (editor, key, value) => {
                    return '<span>'+value+'</span>';
                }
            },
            {
              name: 'Input Variables',
              iconURL: 'http://xdsoft.net/jodit/logo.png',
              list: props.creator.questions.map(x => x.variable),
              exec: function(editor, t, {control}) {
                if(control.args){
                  let key = control.args[0];
                  editor.s.insertHTML('<span style="color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">'+key+'</span>')
                }
              },
              template: (editor, key, value) => {
                  return '<span>'+value+'</span>';
              }
            },
            {
              name: 'Add QR Code',
              iconURL: 'http://xdsoft.net/jodit/logo.png',
              exec: function(editor, t, {control}) {
                editor.s.insertHTML('<img width="200" height="200" src=\'https://andreispurim.github.io/Imagem1.png\'/>')
              },
              template: (editor, key, value) => {
                  return '<span>'+value+'</span>';
              }
            },
            {
              name: 'Add SVG',
              iconURL: 'http://xdsoft.net/jodit/logo.png',
              exec: function(editor, t, {control}) {
                editor.s.insertHTML('<img width="200" src=\'https://andreispurim.github.io/svg_template.png\'/>')
              },
              template: (editor, key, value) => {
                  return '<span>'+value+'</span>';
              }
            }
        ],
      }
  const handleChange=(newContent)=>{
    props.setCreator({...props.creator, template: newContent})
  }
  return (
    <Grid item>
      <Paper elevation={3} style={{width: '210mm', height: '297mm'}}>
        <JoditEditor ref={editor} value={props.creator.template} config={config} tabIndex={1} onBlur={handleChange} />
      </Paper>
    </Grid>
  )
}