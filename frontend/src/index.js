import ReactDOM from 'react-dom';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import './Source/index.css';

import Navbar from './Components/Navbar.js';
import Landing from './Pages/Landing/Landing.js';
import Login from './Pages/Login/Login.js';
import User from './Pages/User/User.js';
import Form from './Pages/Form/Form.js';
import Creator from './Pages/Creator/Creator.js';

import { createExample } from './Source/example.js';


export default function Control(){
  const [alert, setAlert] = React.useState(false);
  const [control, setControl] = React.useState({
    view: 'landing',
    login: 0,
    admin: true,
  });
  const [example, setExample] = React.useState(createExample());
  function setView(newView){
    setControl({...control, view: newView})
  }
  function returnView(){
    switch(control.view){
      case 'landing': return <Landing {...sendControl}/>
      case 'login':   return <Login {...sendControl}/>
      case 'user':    return <User {...sendControl}/>
      case 'forms':   return <Form {...sendControl}/>
      case 'creator': return <Creator {...sendControl}/>
    }
  }
  function Alert(props){
    return(
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert elevation={6} variant="filled" severity="success">
          asdl
        </MuiAlert>
      </Snackbar>
    )
  }
  const sendControl = {control, setControl, setView, example, setExample}
  return(
    <>
      <CssBaseline />
      <Navbar {...sendControl}/>
      {returnView()}
    </>
  )
}

ReactDOM.render(<Control />,document.getElementById('root'));
