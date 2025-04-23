import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./assets/css/common.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './components/Join';
import BoardList from './components/BoardList';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/join' element={<Join />} />
        <Route path='/boards' element={<BoardList />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
