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
    const changePassword = (event) => {
        setUser({...user, password: event.target.value});
    };
    function changeVisibility(state){
        setUser({...user, showPassword: state});
    };
    return (
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Signup
                        </Typography>
                        <div style={{maxWidth:'15rem'}}>
                            <TextField fullWidth label="Username" value={user.username} onChange={changeUsername} />
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
                        </div>
                    </CardContent>
                </Card>
            </Grid>
    )
}