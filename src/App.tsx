import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import './styles/globals.css'
import AppRouter from './Router';

function App() {
  return (
    <div className="App">
      <AppRouter/>
       <NavBar/>
    </div>
  );
}

export default App;
