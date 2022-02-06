import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function Login(props){
  const [user, setUser] = React.useState({
    show: false,
    username: '',
    password: '',
  })
  const changeUsername = (event) => {
    setUser({...user, username: event.target.value});
  };
  const changePassword = (event) => {
    setUser({...user, password: event.target.value});
  };
  const connect = () => {
    // axios({
    //     method: 'get',
    //     url: 'https://api-isarvit.herokuapp.com/API/login',
    //     headers: { 'user': user.username, 'password': user.password}
    // })
    // .then(function (response){
    //   props.setControl({...props.control, login: response})
    // })
    // .catch(function (error){
    //   props.setAlert({open: true, text: "Error in login", severity: "error"})
    // });
    if(user.username in props.example.users && props.example.users[user.username].password === user.password)
      props.setControl({...props.control, user: props.example.users[user.username], view: 'user'})
}

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Connecter
        </Typography>
        <TextField id="standard-name" fullWidth label="Nom d'utilisateur" value={user.username} onChange={changeUsername} />
        <FormControl fullWidth>
          <InputLabel htmlFor="standard-adornment-password">Mot de Passe</InputLabel>
          <Input type={user.show ? 'text' : 'password'} value={user.password} onChange={changePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setUser({...user, show: true})} onMouseDown={() => setUser({...user, show: false})}>
                  {user.show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </CardContent>
      <CardActions>
          <Button disabled={user.username === '' || user.password === ''} size="small" color="primary" onClick={connect}>
            Connecter
          </Button>
      </CardActions>
    </Card>
  )
}