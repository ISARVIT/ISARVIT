import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    }
}));

export default function TitleToolbar(props) {
    const classes = useStyles();
    const [openHelp, setOpenHelp] = React.useState(false);
    const [menuAnchor, setMenuAnchor] = React.useState(null);
    const openMenu=(event)=>{setMenuAnchor(event.currentTarget)}
    const closeMenu=()=>{setMenuAnchor(null)}
    const goProfile=()=>{props.setControl({...props.control, view:'user'})}
    const logout=()=>{props.setControl({view: 'landing', user: null})}
    function loginButton(){
        if(!props.control.user)
            return <Button variant="outlined" onClick={()=>props.setView('login')}>Login</Button>
        else
            return (
                <React.Fragment>
                    <Button variant="outlined" startIcon={<AccountCircleIcon />} onClick={openMenu}>{props.control.user.username}</Button>
                    <Menu open={Boolean(menuAnchor)} onClose={closeMenu} anchorEl={menuAnchor} anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}}>
                        <MenuItem onClick={goProfile}>Profile</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </React.Fragment>
            )
    }
    function formButton(){
        if(props.control.user)
            return <Button variant="outlined" onClick={()=>props.setView('user')}>Forms</Button>
    }
    return(
        <Toolbar className={classes.toolbar}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                <Grid item>
                    <Button size="small" onClick={() => {setOpenHelp(true)}}>About | Help</Button>
                    <Dialog open={openHelp} onClose={() => {setOpenHelp(false)}}>
                        <DialogTitle>ISARVIT</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus quam dapibus massa viverra, sed convallis dolor bibendum. Morbi ornare eros vel orci porttitor, sit amet molestie nisl varius. Curabitur velit dolor, egestas quis ex eu, commodo mattis eros. In tortor magna, vulputate maximus convallis sit amet, suscipit in mauris. Praesent tempor eleifend enim ut convallis. Nam vehicula est vitae turpis fringilla vestibulum a lacinia sem. Fusce varius vulputate metus, malesuada sollicitudin arcu pulvinar id. Nam eleifend ornare erat, eu lacinia nibh iaculis ac. Donec sollicitudin risus in orci lacinia accumsan. Proin vulputate dictum viverra.
                                Made with ❤️ by Andreis.
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </Grid>
                <Grid item style={{}}>
                    <ButtonBase className={classes.toolbarTitle} onClick={()=>props.setView('landing')}>
                        <Typography component="h2" variant="h5" align="center" noWrap style={{textDecoration: 'underline', padding: '1rem'}}>
                            ISARVIT
                        </Typography>
                    </ButtonBase>
                </Grid>
                <Grid item>
                    {formButton()}
                    {' '}
                    {loginButton()}
                </Grid>
            </Grid>
        </Toolbar>
    )
}