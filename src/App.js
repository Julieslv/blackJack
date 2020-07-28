import React from 'react';
import './App.css';
import Header from "./components/header/";
import Deck from "./components/table/deck/";

function App() {
  return (
    <div className="App">
      <Header title="Black Jack" />
      <Deck/>
    </div>


  );
}

export default App;
