import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import InlineSVG from 'svg-inline-react';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Publish(props){
  const classes = useStyles();
  const [svg, setSVG] = React.useState({
    base: '',
  })
  const changeBase=(event)=>{setSVG({...svg, base: event.target.value})};
  return(
    <Grid item xs={4}>
      <Card style={{minWidth:'20rem'}} elevation={3}>
        
        <InlineSVG src={svg.base} />
          <CardContent>
            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item xs={12}>
                <TextField value={svg.base} onChange={changeBase} fullWidth required label="Base" />
              </Grid>
              <Grid item xs={12}>
                <Button variant="outlined" color="primary" onClick={()=>alert("Not available in the moment")} size="small">
                  Conditional SVG
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </Grid>
  )
}