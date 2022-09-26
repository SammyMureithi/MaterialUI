import './App.css';
import MaterialUI from './Components/MaterialUI';
import MuiButton from './Components/MuiButton';
import MUiCheckBox from './Components/MUiCheckBox';
import MUIFloatingActionButton from './Components/MUIFloatingActionButton';
import MUIRating from './Components/MUIRating';
import RadioButtons from './Components/RadioButtons';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <MuiButton />
      <MUiCheckBox />
      <MUIFloatingActionButton />
      <RadioButtons />
      <MUIRating/>
    </div>
  );
}

export default App;
