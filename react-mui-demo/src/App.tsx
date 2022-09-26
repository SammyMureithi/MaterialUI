import './App.css';
import MaterialUI from './Components/MaterialUI';
import MuiButton from './Components/MuiButton';
import MUiCheckBox from './Components/MUiCheckBox';
import MUIFloatingActionButton from './Components/MUIFloatingActionButton';
import MUIRating from './Components/MUIRating';
import MUISwitch from './Components/MUISwitch';
import RadioButtons from './Components/RadioButtons';
import Select from './Components/Select';
import TextField1 from './Components/TextField';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <MuiButton />
      <MUiCheckBox />
      <MUIFloatingActionButton />
      <RadioButtons />
      <MUIRating />
      <Select />
      <MUISwitch />
      <TextField1/>
    </div>
  );
}

export default App;
