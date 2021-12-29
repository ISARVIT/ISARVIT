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

import { dbExample } from './Source/example.js';


export default function Control(){
  const [alert, setAlert] = React.useState({open: false, text: "", severity: "success"});
  const [control, setControl] = React.useState({view: 'landing', user: null});
  const [example, setExample] = React.useState(dbExample());
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
      default: return <Landing {...sendControl}/>
    }
  }
  const closeAlert = () => {
    setAlert({...alert, open: false});
  }
  const sendControl = {control, setControl, setView, example, setExample, setAlert}
  return(
    <>
      <CssBaseline />
      <Navbar {...sendControl}/>
      {returnView()}
      <Snackbar open={alert.open} autoHideDuration={1000} onClose={closeAlert}>
        <MuiAlert elevation={6} variant="filled" severity={alert.severity}>
          {alert.text}
        </MuiAlert>
      </Snackbar>
    </>
  )
}

ReactDOM.render(<Control />,document.getElementById('root'));
