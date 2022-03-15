import React from "react";
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './container/MainContainer';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>
  )
}

export default App;