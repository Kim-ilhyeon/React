import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from './componenets/MenuBar';
import Layout from './componenets/Layout';


const mainMenu = [
    {pathName: "/", text: "HOME"},
    {pathName: "/basic", text: "BASIC"},
    {pathName: "/api", text: "API"}
]

function App() {
  return (
    <BrowserRouter>
      <MenuBar menuInfo={mainMenu} />

      <hr/>
      <Layout />

    </BrowserRouter>
  );
}

export default App;
