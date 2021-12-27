import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import UserTable from './UserTable.js'

export default function User(props){
  const [userTable, setUserTable] = React.useState(0);
  const [adminTable, setAdminTable] = React.useState(0);
  const changeUserTable = (event, newValue) => {
    setUserTable(newValue)
  }
  const changeAdminTable = (event, newValue) => {
    setAdminTable(newValue)
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" style={{marginTop: '2rem'}}>
      <Grid item>
      </Grid>
      <Grid item>
        <Tabs value={userTable} onChange={changeUserTable} indicatorColor="primary" textColor="primary">
          <Tab label="All"/>
          <Tab label="Favorites"/>
          <Tab label="Recent"/>
        </Tabs>
      </Grid>
      <Grid item>
        <UserTable {...props}/>
      </Grid>
      <Grid item>
        <Tabs value={adminTable} onChange={changeAdminTable} indicatorColor="primary" textColor="primary">
          <Tab label="All"/>
          <Tab label="Drafts"/>
          <Tab label="Published"/>
        </Tabs>
      </Grid>
    </Grid>
  )
}