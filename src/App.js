import './App.css';
import { ArtistList } from './artist.list';
import { GetArtist } from './get.artist';

function App() {
  return (
    <div className="App">
      <GetArtist/>
      <ArtistList/>
    </div>
  );
}

export default App;

