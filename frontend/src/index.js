import ReactDOM from 'react-dom';
import React from 'react';

import './Source/index.css';

import Navbar from './Components/Navbar.js';
import Landing from './Pages/Landing/Landing.js';
import Login from './Pages/Login/Login.js';
import User from './Pages/User/User.js';
import Form from './Pages/Form/Form.js';
import Creator from './Pages/Creator/Creator.js';

export default function Control(){
    const [control, setControl] = React.useState({
        view: 'landing',
    });
    const sendControl = {control,setControl}
    function returnView(){
        switch(control.view){
            case 'landing': return <Landing {...sendControl}/>
            case 'login':   return <Login {...sendControl}/>
            case 'user':    return <User {...sendControl}/>
            case 'forms':   return <Form {...sendControl}/>
            case 'creator': return <Creator {...sendControl}/>
        }
    }
    return(
        <>
            <Navbar {...sendControl}/>
            {returnView()}
        </>
    )
}

ReactDOM.render(<Control />,document.getElementById('root'));
