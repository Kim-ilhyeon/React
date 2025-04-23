import logo from './logo.svg';
import './App.css';
import NowTime from './components/NowTime';
import { useState } from 'react';


function App() {
  const [now, setNow] = useState();

  return (
    <div className='App'>
      <header className='app-header' >
      <NowTime/>
      </header>
    </div>
  );
}

export default App;
