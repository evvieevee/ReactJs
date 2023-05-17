import { Button, TextField } from '@mui/material';
import './App.css';
import { TextAreaa } from './sivu';
import { ArtistList } from './artist.list';
import { Artist } from './get.artist';

function App() {

  const buttonHandler = (value) => {
    console.log(value)
  }

  return (
    <div className="App">
      <TextAreaa clickedThis={buttonHandler} />
      <TextField id="outlined-basic" label="Hae ID:llä" variant="outlined" />
      <Button className="AppButton" variant="contained">Hae</Button>
      <ArtistList />
      <Artist/>
    </div>
  );
}

export default App;

