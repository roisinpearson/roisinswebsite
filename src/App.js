import React from 'react';
import banner from './images/banner.png';
import './App.css';
import NavigationTile from "./components/navigation";

function App() {
  return (

    <div className="App">
      <NavigationTile>
      </NavigationTile>
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />


      </header>
    </div>
  );
}

export default App;
