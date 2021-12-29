import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


import CreateIcon from '@material-ui/icons/Create';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
  },
  admin: {
    color:theme.palette.secondary.main,
    fontSize:20
  }
}));

export default function UserCard(props){
  const classes = useStyles();
  function getChipIcon(chip){
    switch(chip.type){
      case 'work': return <WorkOutlineIcon /> 
      case 'study': return <SchoolIcon /> 
      case 'favorites': return <FavoriteBorderIcon /> 
      case 'created': return <CreateIcon /> 
      default: return <HelpOutlineIcon /> 
    }
  }
  function getChipLabel(chip){
    switch(chip.type){
      case 'favorites': return props.control.user.favorites.length + ' Favorites'
      case 'created': return props.control.user.created.length + ' Created'
      default: return chip.label
    }
  }
  function getChipColor(chip){
    if(chip.type==='created')
      return 'secondary'
    return 'primary'
  }
  return (
    <Grid item xs={4} style={{width: '100%'}}>
      <Paper style={{padding:'1rem'}}>
        <Grid xs={12} container direction="column" justifyContent="flex-start" alignItems="stretch">
          <Grid xs={12} spacing={2} item container direction="row" justifyContent="flex-start" alignItems="stretch" className={classes.toolbar}>
            <Grid item xs={2}>
              <Avatar variant="rounded" alt="Avatar" src={props.control.user.avatar} style={{width:'100%',height:'100%'}}/>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4">
                {props.control.user.firstname} {props.control.user.lastname}
              </Typography>
              <Typography variant="subtitle1">
                {props.control.user.description}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="overline" component="h1" className={classes.admin}>
                {props.control.user.admin?'Admin':'User'}
              </Typography>
              <Typography variant="caption" component="h1">
                Joined in {props.control.user.joined}
              </Typography>
              <Typography variant="caption" component="h1">
                Last seen {'today'}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{paddingTop:'1rem'}}>
            {props.control.user.chips.map((chip) => (
               <Chip key={chip.label} icon={getChipIcon(chip)} variant="outlined" label={getChipLabel(chip)} color={getChipColor(chip)}/>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}