import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import UserTable from './UserTable.js'
import UserCard from './UserCard.js'

export default function User(props){
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem', }}>
      <UserCard {...props}/>
      <UserTable {...props}/>
      <Grid item={true} xs={12}>
        <Button variant="contained" size="large" color="secondary">
          Create Form
        </Button>
      </Grid>
    </Grid>
  )
}