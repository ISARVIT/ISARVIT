import React from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

export default function Signup(){
    const [user, setUser] = React.useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        showPassword: false,
        checkPassword: '',
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
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Créer Compte
                </Typography>
                    <Grid container direction="row" justifyContent="space-between" spacing={1}>
                        <Grid item xs={5}>
                            <TextField fullWidth label="Prénom" value={user.firstname} onChange={changeFirstname}/>
                        </Grid>
                        <Grid item xs={7}>
                            <TextField fullWidth label="Nom" value={user.lastname} onChange={changeLastname} />
                        </Grid>
                    </Grid>
                    <TextField fullWidth label="Username" value={user.username} onChange={changeUsername} />
                    <TextField fullWidth label="Mail" value={user.email} onChange={changeEmail} />
                    <FormControl fullWidth>
                        <InputLabel>Mot de Passe</InputLabel>
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
                        <InputLabel>Repetez Mot de Passe</InputLabel>
                        <Input
                            type={'password'}
                            value={user.checkPassword}
                            onChange={changeCheckPassword}  
                        />
                    </FormControl>
            </CardContent>
            <CardActions>
                <Button disabled={user.firstname==='' || user.lastname==='' || user.username==='' || user.email===''|| user.password==='' || user.password!==user.checkPassword} size="small" color="primary" onClick={connect}>
                  Créer
                </Button>
            </CardActions>
        </Card>
    )
}