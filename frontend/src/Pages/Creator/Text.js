import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import React from 'react';
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
        /*

        */
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
        <TextField label="CRtemplate" onChange={changeText} onKeyUp={checkWord} />
    )
}