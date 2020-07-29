import React, { createContext, useContext, useReducer } from 'react';
import {cardDeck} from '../../utilities/constructDeck'
import DeckReducer from './deckReducer';

import {
  DECK_SHUFFLE
 } from "./../types";

// initial state

const initialState = {
  deck: cardDeck,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DeckReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        deck: state.deck,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
