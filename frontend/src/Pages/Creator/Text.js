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


export default function Text(props){
    const example = {
        list: [
            {id:0, value:"prenom", label:"Prénom du patient",color:"blue"},
            {id:1, value:"nom", label:"Nom du patient",color:"cyan"},
            {id:2, value:"date_naissance", label:"Date de naissance",color:"turquoise"},
            {id:3, value:"date_exam", label:"Date de l'examen",color:"grey"},
            {id:4, value:"prenom_med", label:"Prénom du médecin",color:"yellow"},
            {id:5, value:"nom_med", label:"Nom du médecin",color:"orange"}
        ]
    }
    const [text, setText] = React.useState(
        ''
    );
    const changeText = (event) => {
        setText(event.target.value);
    };
    const checkWord = (event) => {
        if(event.key == " " || event.key == "Tab" || event.key == "Enter" || event.key == "," || event.key == "?" || event.key == ";" || event.key == "." || event.key == "!" || event.key == "Escape"){
            let list = event.target.value.replace(/[\[\]?.,\/#!$%\^\*;:{}=\\|_~()]/g, " ").split(" ");
            let lastWord = list[list.length - 2];
            if(lastWord.charAt(0)=="&"){
                alert("Variable détectée");
            }
        }
    };
    return (
        <Grid item>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                CR
                            </Typography>
                            <div style={{maxWidth:'15rem'}}>
                                <TextField label="Write down your text here" onChange={changeText} onKeyUp={checkWord} />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
    )
}