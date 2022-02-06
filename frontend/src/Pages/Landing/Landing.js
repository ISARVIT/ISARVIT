import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import CardActionArea from '@material-ui/core/CardActionArea';


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
    backgroundImage: 'url(https://www.chu-lille.fr/wp-content/uploads/2019/03/JDF4.jpg)',
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


export default function LangingPage(props) {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />

      <main style={{textAlign: 'start'}}>
        <div>
          <Container>
            <br></br>
            <br></br>
            <br></br>
          <Paper className={classes.mainFeaturedPost} >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src="https://www.chu-lille.fr/wp-content/uploads/2019/03/JDF4.jpg" alt="gg" />}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    ISARVIT
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Creer des Compte-Rendus Automatisées
                  </Typography>
                  <div className={classes.buttons}>
                    {props.control.user? null:
                      <Button variant="contained" color="primary" className={classes.buttongg} onClick={()=>props.setControl({...props.control, view: 'login'})}>
                        Connecter
                      </Button>
                    }
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
                          CRIStAL
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                          Partenaire
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          CRIStAL est né le 1er janvier 2015 sous la tutelle du CNRS, de l’Université Lille 1 et de Centrale Lille en partenariat avec l’Université Lille 3, Inria et l’Institut Mines Telecom. CRIStAL est membre de l’institut de recherches interdisciplinaires IRCICA – USR CNRS 3380 (https://ircica.univ-lille.fr/fr/linstitut). Depuis janvier 2018, les universités lilloises ont fusionné. Les tutelles principales de CRIStAL sont l’Université de Lille, le CNRS et Centrale Lille Institut. Ses tutelles secondaires sont Inria Lille Nord Europe et l’IMT Lille-Douai. L’unité est composée de plus de 470 membres (230 permanents et près de 240 non permanents).
                        </Typography>
                       
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://www.cristal.univ-lille.fr/logos/logoCRIStAL.svg" title="" />
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
                          CERIM
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                          Partenaire
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          Le CERIM est une Unité de la Faculté de Médecine Henri Warembourg de l’Université de Lille. Le CERIM est situé au 2ème étage aile Est du Pôle Recherche (voir le plan ). Historiquement, le CERIM est un laboratoire de recherche de la Faculté de Médecine, et a mis en place le réseau et les services informatiques de la Faculté de Médecine et du secteur Droit et Santé de l’Université de Lille (voir l’histoire du CERIM). Le CERIM a été fondé en 1984 par le Pr Régis Beuscart qui l’a dirigé jusqu’en 2018. Depuis, le CERIM est dirigé dans la continuité par le Pr Emmanuel Chazard. Le secrétariat du CERIM est tenu par Mme Mélanie Steffe.
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://cerim.univ-lille.fr/fileadmin/_processed_/4/3/csm_CERIM_logo_2020_0d8c1c9217.png" title="" />
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
      
    </div>
  );
}
