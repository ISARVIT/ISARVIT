import React from 'react';

import { useNavigate, Link } from "react-router-dom";


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ViewListIcon from '@material-ui/icons/ViewList';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import IconButton from '@material-ui/core/IconButton';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  footer: {
    backgroundColor: '#DAE0E2',
    padding: theme.spacing(2),
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  buttons : {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttongg: {
    backgroundColor: 'teal'
  },
  buttonnav: {
    backgroundColor: 'white'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const cards = [];

export default function LangingPage() {


  const classes = useStyles();
  let history = useNavigate();


  return (
    <div>
      <CssBaseline />
      <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
        <AppBar position="relative" style={{backgroundColor: 'teal'}}>
          <Toolbar>
            <ViewListIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
              ISARVIT
            </Typography>
            <Button component={Link} to="/login" variant="contained" className={classes.buttonnav}>Login</Button>
          
          </Toolbar>
        </AppBar>
      </div>

      <main style={{textAlign: 'start'}}>
        <div>
          <Container>
            <br></br>
            <br></br>
            <br></br>
          <Paper className={classes.mainFeaturedPost} >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="gg" />}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    ISARVIT
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Create forms for medical CRs
                  </Typography>
                  <div className={classes.buttons}>
                    <Button variant="contained" color="primary" className={classes.buttongg}  component={Link} to="/login">
                      Login
                    </Button>
                  </div>
                 
              
                  
                </div>
              </Grid>
            </Grid>
          </Paper>
           <br></br>
           <br></br>
           <br></br>
           

           <div>
           <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                        How to use
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                          to create your automate CRs
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et suscipit ligula. Vestibulum rutrum leo justo, a interdum ex imperdiet finibus. Maecenas hendrerit magna magna, eget pharetra lacus suscipit eget. Integer ut maximus augue, consectetur consectetur lacus. Donec viverra nec orci at scelerisque. Maecenas ut nibh turpis. In egestas sagittis imperdiet. Phasellus venenatis congue sem eu tempus. Phasellus finibus consectetur nisi et pulvinar. Aenean vitae luctus sapien. Donec iaculis id tellus ut facilisis. Vestibulum sapien sem, sagittis sed euismod eget, consectetur nec urna. Ut posuere velit at ligula lobortis accumsan. Vestibulum volutpat arcu sit amet sapien viverra, sit amet malesuada eros gravida. Morbi dapibus quam quam, quis luctus dolor hendrerit nec. Nullam fermentum ipsum vitae consequat porttitor.
                        </Typography>
                       
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="" />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                         
                          Creating new formats
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                        become an admin
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et suscipit ligula. Vestibulum rutrum leo justo, a interdum ex imperdiet finibus. Maecenas hendrerit magna magna, eget pharetra lacus suscipit eget. Integer ut maximus augue, consectetur consectetur lacus. Donec viverra nec orci at scelerisque. Maecenas ut nibh turpis. In egestas sagittis imperdiet. Phasellus venenatis congue sem eu tempus. Phasellus finibus consectetur nisi et pulvinar. Aenean vitae luctus sapien. Donec iaculis id tellus ut facilisis. Vestibulum sapien sem, sagittis sed euismod eget, consectetur nec urna. Ut posuere velit at ligula lobortis accumsan. Vestibulum volutpat arcu sit amet sapien viverra, sit amet malesuada eros gravida. Morbi dapibus quam quam, quis luctus dolor hendrerit nec. Nullam fermentum ipsum vitae consequat porttitor.                        </Typography>
                       
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" title="" />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            </Grid>
           </div>
          </Container>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </main>
      
      
      <footer className={classes.footer} style={{}}>
        <Typography variant="h6" align="center" gutterBottom>
          Velocity Forms <small>(An Open source clone of google forms)</small>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
         No Copyright issue. This project is A
       Feel free to use anything that you find helpful, Give credit if you want.
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}
