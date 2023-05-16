import { TextField } from '@mui/material';
import './App.css';
import { TextAreaa } from './sivu';

function App() {

  const buttonHandler = (value) => {
    console.log(value)
  }

  return (
    <div className="App">
      <TextAreaa clickedThis={buttonHandler} />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
