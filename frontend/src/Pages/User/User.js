import React from 'react';

import { useNavigate, Link } from "react-router-dom";
import clsx from 'clsx';


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
import TextField from '@material-ui/core/TextField';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import IconButton from '@material-ui/core/IconButton';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FilterListIcon from '@material-ui/icons/FilterList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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
    },margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '25ch',
      },table: {
        minWidth: 650,
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

  function createData(name, calories, fat, fav) {
    return { name, calories, fat, fav};
  }
  
export default function UserOptions(){
    const classes = useStyles();
    let navigate = useNavigate();
    const [showPassword, setShow] = React.useState(false);
    const [exams, setExams] = React.useState([
      {"name":"Urinary Scan","calories":"Urinary","fat":true,"fav":false},
      {"name":"Test Exam 1","calories":"Pulmonary","fat":false,"fav":false},
      {"name":"Test Exam 2","calories":"Pulmonary","fat":false,"fav":false}
    ])
    const [name1, setName1] = React.useState('');
    const handleChange1 = (event) => {
        setName1(event.target.value);
    };
    const [name2, setName2] = React.useState('');
    const handleChange2 = (event) => {
        setName2(event.target.value);
    };
    const next= () => {
      navigate("/forms");
    };
    function addfav(i){
      let newExams = exams;
      newExams[i].fav = true
      setExams(newExams);
    };
    React.useEffect(() => console.log("hey"),[exams]);
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
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{paddingTop: '10rem'}}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                >
                <Card className={classes.root}>
                <Tabs>
                  <Tab label="Recent"/>
                  <Tab label="My Speciality"/>
                  <Tab label="Favorites"/>
                </Tabs>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Report</b></TableCell>
            <TableCell align="right"><b>System</b></TableCell>
            <TableCell align="right"><b>Actions</b></TableCell>
            <TableCell align="right"><b>Favorite</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exams.map((row, i) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right"><IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        disabled={!row.fat}
                        onClick={next}
                    >
                        <ArrowForwardIosIcon />
              </IconButton></TableCell>
              <TableCell align='right'>
                <IconButton
                        aria-label="favorite exams"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => addfav(i)}
                    >
                {row.fav ? <StarIcon/> : <StarOutlineIcon />}
                </IconButton></TableCell>
                    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </Card>
                {JSON.stringify(exams)}
            </Grid>
            </div>
        </div>
    )
}