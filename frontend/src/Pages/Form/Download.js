import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import html2canvas from 'html2canvas';

import urinaryPNG from "./../../Source/Old/urinary1.PNG";
import qrcodePNG from "./../../Source/Old/qrcode1.PNG";

const { jsPDF } = require("jspdf"); 

export default function Download(props){
    function download(text){
      const input = document.getElementById('divToPrint')
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("urinary_andreis.pdf");
      });
    }
    return(
      <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2}>
        <Grid item>
          <ButtonGroup size="large" color="primary">
            <Button onClick={()=>alert("Not Available Yet!")}>Edit Result</Button>
            <Button onClick={download}>Download</Button>
          </ButtonGroup>
        </Grid>
        <Grid item>
          <Paper elevation={5}>
            <div id='divToPrint' className="mt4" style ={{
                      backgroundColor: '#FFF',
                      width: '210mm',
                      minHeight: '297mm',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      padding:'2rem',
                  }}>
                  <p>ID : 123 Prénom : Andreis Nom : PURIM Date de naissance : 1999-07-04</p>
                  <h1 style={{textAlign:'center'}}>URINARY / SCANNER ABDOMINO-PELVIEN</h1>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                      <img src={urinaryPNG}></img>
                      <img src={qrcodePNG} style={{height: '10rem'}}></img>
                  </div>
                  <hr/>
                  <p> Examen : Radiography Réalisé le : 2021-06-05T18:04:34 Dr </p>
                  <h2>INDICATION :</h2>
                      Douleur abdominal
                  <h2>PROTOCOLE :</h2>
                      <p>Le modèle d'appareil d'imagerie utlisé est Scanner 3000TMAX. Il a élé validé le 2004-12-15. Pas de dérivation des voies urinaires mis en place au moment de
                      l'examen. Patient non fièvreu et pas de crise clinique au moment de l'examen. Acquisition spiralée avec injection de produit de contraste : IV centrée sur l'étage
                      abdomino-pelvien. DLP = 18 mGy.cm.
                      </p>
                  <h2>RESULTATS </h2>
                  <p>
                  Intégrité sans injection du foie, des glandes surrénales, du pancréas, de la rate, des ovaires et des glandes lymphatiques. Pas d'infiltrations de la vésicule biliaire,
                  de l'appendice et du sigmoïde.<br/>
                  Pas de pneumoperitoneum détecté.<br/>
                  Pas d'effusion intrapéritonéale détectée<br/>
                  Duplication des voies urinaires à droite pour décrire une voie urinaire 'additionnelle'.Pas de transplantation rénale effectuée antérieurement.<br/>
                  Pas d'urolithiase détectée.<br/>
                  Pas de phlébolithe pelvienne détectée.<br/>
                  Nombre de lithiases détectées au cours de l'examen : 2<br/><br/>
                  Bilan des lithiases :<br/>
                  Identifiant : GFSDf5s4fdg. Evolution : Stable. Latéralisation : Right upper pole. Location : Proximal ureter. Lithiase non coralliforme Diamètre maximal : 176 mm
                  Densité : 1235 Hounsfield Distance entre la lithiase et la jonction uretero-vésicale : 21 cm Infiltration des tissus due à l'urolithiase Indication d'une obstruction :
                  Major calyces dilatation Perturbation de la perfusion rénale due à l'urolithiase : Non measurable Au bord du décès
                  <br/><br/>
                  Identifiant : OiJ58562Rf7. Evolution : New. Latéralisation : Right lower pole. Location : Renal pelvis. Lithiase coralliforme Diamètre maximal : 32 mm Densité : 8
                  Hounsfield Distance entre la lithiase et la jonction uretero-vésicale : 4 cm Infiltration des tissus due à l'urolithiase Indication d'une obstruction : Major calyces
                  dilatation Perturbation de la perfusion rénale due à l'urolithiase : Non measurable Non ça va en fait
                  </p>
                  <h2>CONCLUSION </h2>
                  <p>Qualification des observations : Abnormal compatible with clinical description. Il n'est pas nécessaire de faire un autre scan. Examen conseillé : None Nécessité de consulter un autre médecin : Further physician opinion advised Médecin à consulter : Docteur</p>
              </div>
          </Paper>
        </Grid>
      </Grid>
    )
}



