import { Button, TextField } from "@mui/material";
import { useState } from "react";



export const GetArtist = () => {

const [artistName, setArtist] = useState(null);
const [artistSongs, setArtistSongs] = useState([]);
const [userinput, setUserinput] = useState(0);
const [newSongName, setNewSongName] = useState('');

const fetchArtist = () => {
  fetch('http://localhost:3002/api/' + userinput, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    }
  }).then(response => {
    return response.json()})
  .then(data => {
    setArtist(data.name);
    setArtistSongs(data.songs);
  }).catch(() => {
    setArtist(null);
    setArtistSongs([]);
  })
};

const addSong = () => {
  if(newSongName.length > 0) {
    const newArray = [...artistSongs, {name: newSongName}];
    setArtistSongs(newArray);
    setNewSongName('')
  }
}

const update = (e, index) => {
  const newSongsList = [...artistSongs]
  newSongsList[index].name = e;
  setArtistSongs(newSongsList);
}

const updateArtist = () => {
  fetch('http://localhost:3002/api/update/' + userinput, {
    method: "PATCH",
    body: JSON.stringify({
      artistName: artistName,
      songs: artistSongs
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }).then(response => {
    return response.json()})
  .then(data => {
    console.log(data);
  }).catch((e) => {
    console.log(e)
  })
}
  
  return (<>
  <h1>Hae artisti: </h1>
  <TextField onChange={(event) => {
    setUserinput(event.target.value);
  }} id="outlined-basic" label="Hae ID:llä" variant="outlined" /> 
  <Button onClick={fetchArtist} className="AppButton" variant="contained">Hae</Button>
  <br />
  {artistName && 
  <>
    <TextField id="outlined-basic" onChange={e => setArtist(e.target.value)} value={artistName} label="Artist name" variant="outlined" placeholder="artist name"/>
    <ul>
      {artistSongs.map((x, index) => <TextField key={index} onChange={e => update(e.target.value, index)} value={x.name} />)}
    </ul>
    <TextField id="outlined-basic" onChange={e => setNewSongName(e.target.value)} value={newSongName} label="Artist Song" variant="outlined" placeholder="Artist Song"/>
    <Button onClick={addSong} className="AppButton" variant="contained">Lisää</Button>
    <Button onClick={updateArtist} className="AppButton" variant="contained">Päivitä</Button>
  </>
  }
  </>);
}

