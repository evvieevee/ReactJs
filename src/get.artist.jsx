import { Button, TextField } from "@mui/material";
import { useState } from "react";



export const Artist = () => {

const [artist, setArtist] = useState(null);
const [userinput, setUserinput] = useState(0);


const fetchArtist = () => {
  fetch('http://localhost:3002/api' + '/' + userinput, {
    headers: {
      "Accept": "application/json",
    }
  }).then(response => {
    return response.json()})
  .then(data => {
    setArtist(data);
    console.log(data)
  }).catch(() => {
    setArtist(null);
  })
};

const mapArtist = () => <p>{artist}</p>
  
  return (<>
  <h1>Blog Articles</h1>
  <TextField onChange={(event) => {
    setUserinput(event.target.value);
  }} id="outlined-basic" label="Hae ID:llä" variant="outlined" /> 
  <Button onClick={fetchArtist} className="AppButton" variant="contained">Hae</Button> 
  {artist && <p>{artist.name}</p>}
  </>);
}
