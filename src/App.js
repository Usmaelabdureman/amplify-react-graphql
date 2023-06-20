import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 style={{fontFamily:'sans-serif',color:'ButtonFace'}}>Follow me on</h1>
          <ul style={{listStyleType:'none'}}>
            <li> <a style={{textDecoration:'none'}} href='https://github.com/Usmaelabdureman' target='_blank' rel="nore noreferrer">Github</a></li>
            <li> <a style={{textDecoration:'none'}} href='https://www.instagram.com/esmizth/'>Insta</a></li>
          </ul>
        </div>
        <h1>Hello from V2</h1>
      </header>
    </div>
  );
}

export default App;