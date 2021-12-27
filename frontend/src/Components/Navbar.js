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
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar(props){
    const classes = useStyles();
    return(
        <div>
            <CssBaseline />
            <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
                <AppBar position="relative" style={{backgroundColor: 'teal'}}>
                    <Toolbar>
                    <ViewListIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                        ISARVIT {props.control.view}
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}