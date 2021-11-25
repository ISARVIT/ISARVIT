import React from 'react';

import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import Navbar from './../../Components/Navbar.js';
import LoginCard from './LoginCard.js';
import SignupCard from './SignupCard.js';


export default function Login(){
    const [option, setOption] = React.useState(0);
    const change = (event, newValue) => {
      setOption(newValue)
    }
    return (
        <>
            <Navbar />
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{marginTop: '10rem'}}
              >
              <Grid item>
                <Tabs value={option} onChange={change}>
                  <Tab label="Login"/>
                  <Tab label="Signup"/>
                </Tabs>
              </Grid>
              {option===0?
                <LoginCard />
              :
              <SignupCard />
              }
          </Grid>
        </>  
    )
}