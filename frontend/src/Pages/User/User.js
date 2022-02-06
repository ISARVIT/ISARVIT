import Button from '@material-ui/core/Button';
import CropFreeIcon from '@material-ui/icons/CropFree';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import UserTable from './UserTable.js'
import UserCard from './UserCard.js'

export default function User(props){
  const goCreate=()=>{
    props.setControl({...props.control, tempData: {}, formID: null, view:'creator'})
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem', }}>
      <UserCard {...props}/>
      <UserTable {...props}/>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" startIcon={<CropFreeIcon />} onClick={()=>props.setView('readqr')}>
          Lire QRCode
        </Button>
      </Grid>
      {!props.control.user.admin? null:
        <Grid item={true} xs={12}>
          <Button onClick={goCreate} variant="contained" size="large" color="secondary">
            Creer Formulaire
          </Button>
        </Grid>
      }
    </Grid>
  )
}