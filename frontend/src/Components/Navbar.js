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
    const goProfile=()=>{props.setControl({...props.control, view:'user', formID: null, tempData: {}})}
    const logout=()=>{props.setControl({view: 'landing', formID: null, tempData: {}, user: null})}
    function loginButton(){
        if(!props.control.user)
            return <Button variant="outlined" onClick={()=>props.setView('login')}>Connecter</Button>
        else
            return (
                <React.Fragment>
                    <Button variant="outlined" startIcon={<AccountCircleIcon />} onClick={openMenu}>{props.control.user.username}</Button>
                    <Menu open={Boolean(menuAnchor)} onClose={closeMenu} anchorEl={menuAnchor} anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}}>
                        <MenuItem onClick={goProfile}>Profil</MenuItem>
                        <MenuItem onClick={logout}>D??connecter</MenuItem>
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
                    <Button size="small" onClick={() => {setOpenHelp(true)}}>Pour ISARVIT</Button>
                    <Dialog open={openHelp} onClose={() => {setOpenHelp(false)}}>
                        <DialogTitle>ISARVIT</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                ISARVIT est une tr??s belle application Web bas??e sur l'id??e simple de faciliter la g??n??ration de rapports m??dicaux. Cela a commenc?? comme un projet ??tudiant sous la direction de M. Slim Hammadi (chercheur au CRIStAL et professeur ?? Centrale Lille) et du Centre Hospitalier Universitaire de Lille.
                                L'id??e est simple : un M??decin (qui sera d??sormais r??f??renc?? comme "Admin") peut cr??er des formulaires m??dicaux et un mod??le pour le Rapport M??dical, un autre utilisateur (qui sera r??f??renc?? comme "Utilisateur"), tel qu'un autre m??decin ou radiologue, peut acc??der aux formulaires disponibles, remplir les questions avec les informations de son patient et, en quelques secondes, avoir entre les mains un rapport m??dical bien format??.
                                (<a href="https://github.com/ISARVIT">Documentation</a>)
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