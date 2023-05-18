import { Button, TextField } from "@mui/material";
import { useState } from "react";



export const AddArtist = (props) => {

const [userinput, setUserinput] = useState("");


const fetchArtist = () => {
  fetch('http://localhost:3002/api/add', {
    method: "POST",
    body: JSON.stringify({
      artistName: userinput,
      songs: []
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }).then(response => {
    return response.json()})
  .then(data => {
    props.action()
  }).catch((e) => {
    console.log("error", e)
  })
};
  
  return (<>
  <h1>Lisää artisti:</h1>
  <TextField onChange={(event) => {
    setUserinput(event.target.value);
  }} id="outlined-basic" label="Kirjoita nimi" variant="outlined" /> 
  <Button onClick={fetchArtist} className="AppButton" variant="contained">Lisää</Button> 
  </>);
}