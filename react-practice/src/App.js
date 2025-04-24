import logo from './logo.svg';
import './App.css';
import NowTime from './components/NowTime';
import { useState } from 'react';
import Header from './components/Header';
import TextCount from './components/TextCount';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [now, setNow] = useState();

  return (
    <BrowserRouter>
      <div className='App'>
        <header className='app-header' >
          <Header />
        </header>
        <hr />
        <div>
          <Routes>
          <Route path='/timer' element={<NowTime />} />
          {/* <NowTime /> */}
          <Route path='/count/letters' element={<TextCount />} />
          {/* <TextCount /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
