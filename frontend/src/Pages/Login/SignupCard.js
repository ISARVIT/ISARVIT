import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
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
import MuiAlert from '@material-ui/lab/Alert';
import { green } from '@material-ui/core/colors';

export default function Signup(){
    const [user, setUser] = React.useState({
        'firstname': '',
        'lastname': '',
        'username': '',
        'email': '',
        'password': '',
        'showPassword': false,
        'checkPassword': '',
    });
    const changeUsername = (event) => {
        setUser({...user, username: event.target.value});
    };
    const changeFirstname = (event) => {
        setUser({...user, firstname: event.target.value});
    };
    const changeLastname = (event) => {
        setUser({...user, lastname: event.target.value});
    };
    const changeEmail = (event) => {
        setUser({...user, email: event.target.value});
    };
    const changePassword = (event) => {
        setUser({...user, password: event.target.value});
    };
    const changeCheckPassword = (event) => {
        setUser({...user, checkPassword: event.target.value});
    };
    function changeVisibility(state){
        setUser({...user, showPassword: state});
    };
    const connect = () => {
        alert("Connected!")
    }
    return (
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Signup
                        </Typography>
                        <div style={{maxWidth:'15rem'}}>
                            <TextField fullWidth label="First name" value={user.firstname} onChange={changeFirstname} />
                            <TextField fullWidth label="Last name" value={user.lastname} onChange={changeLastname} />
                            <TextField fullWidth label="Username" value={user.username} onChange={changeUsername} />
                            <TextField fullWidth label="Mail" value={user.email} onChange={changeEmail} />
                            <FormControl fullWidth>
                                <InputLabel>Password</InputLabel>
                                <Input
                                    type={user.showPassword ? 'text' : 'password'}
                                    value={user.password}
                                    onChange={changePassword}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            onClick={() => changeVisibility(true)}
                                            onMouseDown={() => changeVisibility(false)}
                                            >
                                            {user.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl fullWidth /*style={{color:user.checkPassword===user.password&user.checkPassword!==''? "green":null}}*/ error={user.checkPassword!==user.password&user.checkPassword!==''}>
                                <InputLabel>Check password</InputLabel>
                                <Input
                                    type={'password'}
                                    value={user.checkPassword}
                                    onChange={changeCheckPassword}  
                                />
                            </FormControl>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button disabled={user.firstname==='' || user.lastname==='' || user.username==='' || user.email===''|| user.password==='' || user.password!==user.checkPassword} size="small" color="primary" onClick={connect}>
                        Connect
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
    )
}