import './App.css';
import { MuiButton } from './components/MuiButton';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiSelect } from './components/MuiSelect';
import { MuiTextField } from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';
import Divider from '@mui/material/Divider';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <Divider variant="middle"  sx={{ mt: 3,mb:3 }}/>
      <MuiButton />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiTextField />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiSelect />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiRadioButton />
    </div>
  );
}

export default App;
