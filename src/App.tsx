import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import './styles/globals.css'
import AppRouter from './Router';
// import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AppRouter/>
    </div>
  );
}

export default App;
