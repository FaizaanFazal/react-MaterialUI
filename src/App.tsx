import './App.css';
import { MuiAccordian } from './components/MuiAccordian';
import { MuiAutoComplete } from './components/MuiAutoComplete';
import { MuiButton } from './components/MuiButton';
import { MuiCard } from './components/MuiCard';
import { MuiCheckbox } from './components/MuiCheckBox';
import { MuiImageList } from './components/MuiImageList';
import { MuiLayout } from './components/MuiLayout';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSelect } from './components/MuiSelect';
import { MuiSwitch } from './components/MuiSwitch';
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
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiCheckbox />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiSwitch />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiRating />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiAutoComplete />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiLayout />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiCard />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiAccordian />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
      <MuiImageList />
      <Divider variant="middle" sx={{ mt: 3,mb:3 }}/>
    </div>
  );
}

export default App;
