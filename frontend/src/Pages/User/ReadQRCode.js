import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CropFreeIcon from '@material-ui/icons/CropFree';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Scanner from "react-webcam-qr-scanner";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import yaml from 'js-yaml';

import FormCard from './FormCard.js';

export default function ReadQRCode(props){
  const [data,setData] = React.useState(null);
  const handleDecode = (result) => {
    if(!data){
      let qrdata = yaml.load(result.data);
      setData({row: props.example.rows[qrdata.formID], answers: qrdata});
    }
  }
  const retry=()=>{setData(null)};
  const back=()=>{props.setView('user')};
  const use=()=>{
    props.setControl({...props.control, QRData: data.answers.answers, view:'form'})
  }
  return (
    <Grid container xs={12} spacing={1} direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem' }}>
      <Grid item xs={12}>
        <Button variant="outlined" color="primary" onClick={back} startIcon={<ChevronLeftIcon />}>
          Return
        </Button>
      </Grid> 
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Grid xs={12} container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={1} style={{paddingBottom:'1rem'}}>
            {/* <Grid item xs={12}>
              <Avatar><CropFreeIcon/></Avatar>
            </Grid> */}
            <Grid item xs={12}>
              <Scanner onDecode={handleDecode} constraints={{ audio: false, video: {facingMode: "environment"} }} captureSize={{ width: 1280, height: 720 }}/>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="overline" display="block">
                {data?'Detected':'Not Detected'}. {data?<Link component="button" variant="overline" onClick={retry}>Retry?</Link>:null}
              </Typography>
            </Grid>
            {!data?null:
              <React.Fragment>
                <Grid item xs={12}>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell><b>Date</b></TableCell>
                          <TableCell><b>User</b></TableCell>
                          <TableCell><b>Form Title</b></TableCell>
                          <TableCell><b>Form ID</b></TableCell>
                          <TableCell><b>Answers</b></TableCell>
                          <TableCell><b>Preview</b></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            {data.answers.date}
                          </TableCell>
                          <TableCell>
                            {data.answers.user}
                          </TableCell>
                          <TableCell>
                            {data.row.name}
                          </TableCell>
                          <TableCell>
                            {data.answers.formID}
                          </TableCell>
                          <TableCell>
                            {Object.keys(data.answers.answers).length}/{data.row.questions}
                          </TableCell>
                          <FormCard {...props} readingQRCode row={data.row}/>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid item xs={12} style={{padding:'1rem'}}>
                  <Button variant="contained" color="primary" onClick={use} startIcon={<ChevronRightIcon />}>
                    Use Answers
                  </Button>
                </Grid>
              </React.Fragment>
            }
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}