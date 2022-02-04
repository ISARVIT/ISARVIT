import Button from '@material-ui/core/Button';
import CropFreeIcon from '@material-ui/icons/CropFree';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import UserTable from './UserTable.js'
import UserCard from './UserCard.js'

export default function User(props){
  const goCreate=()=>{
    props.setControl({...props.control, view:'creator'})
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem', }}>
      <UserCard {...props}/>
      <UserTable {...props}/>
      <Grid item xs={12}>
        <input accept="image/*" type="file" id='inputSVG' style={{display:'none'}}/>
        <label htmlFor='inputSVG'>
          <Button variant="contained" color="primary" component="span" startIcon={<CropFreeIcon />}>
            Read QRCode
          </Button>
        </label>
      </Grid>
      {!props.control.user.admin? null:
        <Grid item={true} xs={12}>
          <Button onClick={goCreate} variant="contained" size="large" color="secondary">
            Create Form
          </Button>
        </Grid>
      }
    </Grid>
  )
}