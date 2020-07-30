import React, { createContext, useReducer } from 'react';
import { cardDeck } from '../../utilities/constructDeck';
import GameContext from './gameContext';
import GameReducer from './gameReducer';

import { SHUFFLE_DECK } from '../types';

const GameState = props => {
  // initial state
  const initialState = {
    deck: cardDeck,
    player: {},
    dealer: {},
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  //Shuffle deck
  const shuffleDeck = () => {
    const newDeck = cardDeck.sort(() => Math.random() - 0.5);
    dispatch({
      type: SHUFFLE_DECK,
      payload: cardDeck,
    });
  };

  // Provider Component
  return (
    <GameContext.Provider
      value={{
        deck: state.deck,
        player: state.player,
        dealer: state.dealer,
        shuffleDeck,
      }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
