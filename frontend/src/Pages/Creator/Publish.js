import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function Publish(props){
  const classes = useStyles();
  const getPublish=()=>{
    if(props.control.tempData&&(props.control.formID===props.control.tempData.id)){
      let publishData = props.example.rows.find(row=>row.id===props.control.formID)
      publishData.last_updated = new Date().toJSON();
      if(Array.isArray(publishData.keywords)){
        publishData.keywords = publishData.keywords.join(',');
      }
      return publishData;
    }
    else{
      return {
        id: props.creator.formID,
        editable: true,
        name: '',
        last_updated: new Date().toJSON(),
        field: '',
        creator: props.control.user.firstname + ' ' + props.control.user.lastname ,
        preview: '',
        creator_avatar: props.control.user.avatar,
        dynamic_image: false,
        creator_id: props.control.user.id,
        keywords: '',
        questions: props.creator.questions.length,
        uses: 0,
        description: '',
        paragraph: '',
      }
    }
  }
  const [publish, setPublish] = React.useState(getPublish())
  const changeTitle=(event)=>{setPublish({...publish, name: event.target.value})};
  const changeField=(event)=>{setPublish({...publish, field: event.target.value})};
  const changeDescription=(event)=>{setPublish({...publish, description: event.target.value})};
  const changePreview=(event)=>{setPublish({...publish, preview: event.target.value})};
  const changeKeywords=(event)=>{setPublish({...publish, keywords: event.target.value})};
  const changeMore=(event)=>{setPublish({...publish, paragraph: event.target.value})};
  const savePublish=()=>{
    let newRows = props.example.rows;
    let newRow = publish;
    if(!Array.isArray(newRow.keywords)){
      newRow.keywords = [...new Set(newRow.keywords.split(',').map(keyword=>keyword.trim()))];
    }
    let currentRow = newRows.find(rows=>rows.id===props.creator.id)
    newRow.id = props.creator.id;
    if(currentRow){
      newRows[newRows.indexOf(currentRow)] = newRow;
    }
    else{
      newRows.push(newRow);
      let newUsers = props.example.users
      newUsers[props.control.user.username].created.push(newRow.id)
    }
    props.example.forms[newRow.id] = props.creator;
    let newForms = props.example.forms
    newForms[newRow.id] = props.creator;
    props.setExample({...props.example, qforms: props.example.qforms+1, forms: newForms, rows: newRows})
    props.setControl({...props.control, formID: null, setData: {}, view: 'user'})
  }
  return(
    <Grid item xs={4}>
      <Card style={{minWidth:'20rem'}} elevation={3}>
          <CardHeader
            avatar={<Avatar src={publish.creator_avatar} />}
            action={<Tooltip title="Options"><IconButton><MoreVertIcon /></IconButton></Tooltip>}
            title={'Created by '+publish.creator}
            subheader={'FormID '+props.creator.id+'.Last update: '+new Date().toISOString().slice(0, 10)}
          />
          <CardMedia
            className={classes.media}
            image={publish.preview}
            title="Preview"
          />
          <CardContent>
            <Grid container spacing={2} direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item xs={12}>
                <TextField value={publish.name} onChange={changeTitle} fullWidth required label="Title" />
              </Grid>
              <Grid item xs={12}>
                <TextField value={publish.field} onChange={changeField} fullWidth required label="Field" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField value={publish.description} onChange={changeDescription} fullWidth required label="Description" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField helperText="Example: https://images.sampletemplates.com/wp-content/uploads/2017/02/Sample-Medical-Reports.jpg" value={publish.preview} onChange={changePreview} fullWidth required label="Background URL" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField value={publish.keywords} onChange={changeKeywords} fullWidth required label="Keywords separated by ," variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Questions:</b> {publish.questions} Questions
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField value={publish.read_more} onChange={changeMore} fullWidth label="Read more (Optional)" multiline rows={8} variant="outlined" />
              </Grid>
            </Grid>
          </CardContent>
          <DialogActions style={{paddingTop: 0}}>
            <Button disabled={publish.title===''||publish.description===''||publish.preview===''||publish.keywords===''} onClick={savePublish} color="primary">
              Publish
            </Button>
          </DialogActions>
        </Card>
    </Grid>
  )
}