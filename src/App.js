import React from 'react';
import './App.css';
import { Header } from './components/header/';
import { Deck } from './components/table/deck/';
import { House } from './components/table/house';
import { Player } from './components/table/player';

import { GlobalProvider } from './context/blackjack/deckState';

function App() {
  return (
    <GlobalProvider>
      <Header title='Black Jack' />
      <House />
      <Player />
      <Deck />
    </GlobalProvider>
  );
}

export default App;
