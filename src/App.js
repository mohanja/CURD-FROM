import logo from './logo.svg';
import './App.css';

import Table from './Table';
import Creat from './Creat';
import FromValidstion from './FromValidstion';
import {Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FromValidstion/>}/>
        <Route path='/curd' element={<Creat/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
