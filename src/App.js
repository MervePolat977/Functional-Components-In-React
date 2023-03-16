import React from 'react';
import './App.css';
import { Alt_Navbar } from './components/navbar';
import Navbar from './components/navbar';
import Govde from './components/Govde';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Alt_Navbar/>
      <Govde/>
    </div>
  )
}

export default App;