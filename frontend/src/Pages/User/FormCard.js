import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '40%', // 16:9
  },
}));

export default function FormCard(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const useForms = () => {
    props.setControl({...props.control, view: 'form', formID: props.row.id})
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function editForms(row){
    alert("Available on next release")
    return null
  }
  return (
    <TableCell>
      <Tooltip title="See Form">
        <IconButton onClick={handleClickOpen}>
          <ChevronRightIcon />
        </IconButton>
      </Tooltip>
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth='sm'>
        <Card>
          <CardHeader
            avatar={<Avatar src={props.row.creator_avatar} />}
            action={<Tooltip title="Options"><IconButton><MoreVertIcon /></IconButton></Tooltip>}
            title={'Created by '+props.row.creator}
            subheader={'FormID '+props.row.id+'. Last update: '+new Date(props.row.last_updated).toISOString().slice(0, 10)}
          />
          <CardMedia
            className={classes.media}
            image={props.row.preview}
            title="Preview"
          />
          <CardContent>
            <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="center">
              <Grid item>
                <Typography variant="h4" component="span">{props.row.name}</Typography>
              </Grid>
              <Grid item>
              <Chip variant="outlined" label={props.row.field} color='primary'/>
              </Grid>
              {!props.row.dynamic_image? null:
                <Grid item>
                  <Chip variant="outlined" label={'Dynamic Image'} color='primary'/>
                </Grid>
              }
            </Grid>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.row.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Keywords:</b> {props.row.keywords.join(', ')}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Questions:</b> {props.row.questions} Questions
            </Typography>
            {!props.row.paragraph? null:
              <React.Fragment>
                <Link component="button" variant="span" onClick={handleExpandClick}>Read {expanded?'less':'more'}</Link>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography paragraph>
                    {props.row.paragraph}
                  </Typography>
                </Collapse>
              </React.Fragment>
            }
          </CardContent>
          {props.readingQRCode? null:
            <DialogActions style={{paddingTop: 0}}>
              {props.control.user.id!==props.row.creator_id? null:
                <Button disabled={!props.row.editable} onClick={editForms} color="primary">
                  Edit
                </Button>
              }
              <Button disabled={props.row.id} onClick={useForms} color="primary">
                Use
              </Button>
            </DialogActions>
          }
        </Card>
      </Dialog>
    </TableCell>
  )
}