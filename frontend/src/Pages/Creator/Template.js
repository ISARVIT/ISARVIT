
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
                editor.s.insertHTML('<img width="200" height="200" src=\'https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/p526x296/270598535_1904906983029605_9132175722949960179_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=4ysgNI_7ZiwAX_8n-lf&_nc_ht=scontent-cdg2-1.xx&oh=00_AT-WfiQ7mFQ0uxI5G6Tl4825WOyMkpgWiqfycldmWF0hfg&oe=61D7D725\'/>')
              },
              template: (editor, key, value) => {
                  return '<span>'+value+'</span>';
              }
            },
            {
              name: 'Add SVG',
              iconURL: 'http://xdsoft.net/jodit/logo.png',
              exec: function(editor, t, {control}) {
                editor.s.insertHTML('<img width="200" src=\'https://scontent.xx.fbcdn.net/v/t39.30808-6/p75x225/271189657_1904907079696262_5002708418190393764_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=dbeb18&_nc_ohc=viBmhyFiUdEAX-5qRLz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT_UlqV694lE6IEX4YCyhCRcMHLi-jGgK3WZSyQjKtq4DQ&oe=61D6F2A6\'/>')
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
      <Paper elevation={3} style={{width: '210mm', height: '297mm',}}>
        <JoditEditor ref={editor} value={props.creator.template} config={config} tabIndex={1} onBlur={handleChange} />
      </Paper>
    </Grid>
  )
}