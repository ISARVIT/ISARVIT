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
    var isValid=(function(){
        var rg1=/^[^\\/:\*\?"&<>\|]+$/; // forbidden characters \ / : * ? " & < > |
        var rg2=/^\./; // cannot start with dot (.)
        return function isValid(fname){
          return !(rg1.test(fname)&&!rg2.test(fname));
        }
    })();
    const [field, setField] = React.useState({
        'id': 0,
        'value': '',
        'label': '',
        'color': '',
    });
    const changeFieldLabel = (event) => {
        setField({...field, label: event.target.value});
    };
    const changeFieldValue = (event) => {
        setField({...field, value: event.target.value});
    };
    return(
        <Grid item xs>
                    <Card style={{height: '100%'}}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Add a new field
                            </Typography>
                            <div style={{maxWidth:'15rem'}}>
                                <FormControl fullWidth>
                                    <InputLabel>Field label</InputLabel>
                                    <Input
                                        value={field.label}
                                        onChange={changeFieldLabel}  
                                    />
                                </FormControl>
                                <FormControl fullWidth error={isValid(field.value)&field.value!==''}>
                                    <InputLabel>Field name</InputLabel>
                                    <Input
                                        value={field.value}
                                        onChange={changeFieldValue} 
                                    />
                                </FormControl>
                                <select>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option selected value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
    )
}