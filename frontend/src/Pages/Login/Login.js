import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import LoginCard from './LoginCard.js';
import SignupCard from './SignupCard.js';


export default function Login(props){
  const [card, setCard] = React.useState(0);
  const change = (event, newValue) => {
    setCard(newValue)
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{marginTop: '10rem'}}>
      <Grid item>
        <Tabs value={card} onChange={change} indicatorColor="primary" textColor="primary">
          <Tab label="Connecter"/>
          <Tab label="Creer"/>
        </Tabs>
      </Grid>
      <Grid item xs={3} style={{width: '100%'}}>
        {!card?<LoginCard {...props}/>:<SignupCard {...props}/>}
      </Grid>
    </Grid>
  )
}