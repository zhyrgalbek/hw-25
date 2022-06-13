import './App.css';
import Authorization from './Components/Autorization';
import { BackgorundApp } from './Components/Autorization';
import Profile from './Components/Profile';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

function App() {
  const spinnerIsValid = useSelector(state=>state.user.spinnerIsValid);

  if(spinnerIsValid){
    return (
      <div className="App">
        <BackgorundApp>
          <Spinner>
            <CircularProgress color='secondary' />
          </Spinner>
        </BackgorundApp>
      </div>
    );
  }

  if (localStorage.getItem('dostup')) {
    return (
      <div className="App">
        <BackgorundApp>
          <Profile />
        </BackgorundApp>
      </div>
    )
  } else {
    return (
      <div className="App">
        <BackgorundApp>
          <Authorization />
        </BackgorundApp>
      </div>
    );
  }

}

export default App;

const Spinner = styled.div`
  /* border: 1px solid red; */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`;