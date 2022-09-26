import { Avatar } from '@mui/material';
import './App.css';
import Avater from './Components/Avater';
import SubheaderDividers from './Components/Divider';
import MaterialUI from './Components/MaterialUI';
import MUIBadge from './Components/MUIBadge';
import MuiButton from './Components/MuiButton';
import MUiCheckBox from './Components/MUiCheckBox';
import MUIFloatingActionButton from './Components/MUIFloatingActionButton';
import FolderList from './Components/MUIList';
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
      <TextField1 />
      <Avater />
      <MUIBadge />
      <SubheaderDividers />
      <FolderList/>
    </div>
  );
}

export default App;
