import React, { createContext, useReducer } from 'react';
import { cardDeck } from '../../utilities/constructDeck';
import GameContext from './gameContext';
import GameReducer from './gameReducer';

import { CARD_DECK, DEAL_PLAYER, DEAL_DEALER } from '../types';

const GameState = props => {
  const shuffle = array => array.sort(() => Math.random() - 0.5);

  // initial state
  const initialState = {
    deck: [],
    player: [],
    dealer: [],
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  //Shuffle deck
  const shuffleDeck = () => {
    const newDeck = shuffle(cardDeck);
    dispatch({
      type: CARD_DECK,
      payload: cardDeck,
    });
  };

  // Deal Cards for player
  const deal = () => {
    // console.log(state.player.length < 2);
    const getRandomArbitrary = (min, max) =>
      parseInt(Math.random() * (max - min) + min);
    // console.log(state.player);

    const playersHand = [];
    let newDeck = cardDeck;

    const playerCards = () => {
      const randomCard = getRandomArbitrary(0, cardDeck.length);
      playersHand.push(cardDeck[randomCard]);

      console.log('plalyer cards', cardDeck[randomCard]);
      newDeck = newDeck.filter(card => card !== cardDeck[randomCard]);
    };

    while (playersHand.length < 2) {
      playerCards();
    }

    if (playersHand.length === 2) {
      console.log('newDeck: ', newDeck);
      dispatch({
        type: DEAL_PLAYER,
        payload: playersHand,
      });
      dispatch({
        type: CARD_DECK,
        payload: newDeck,
      });
    }
  };
  const dealPlayer = () => {};
  const dealDealer = () => {};

  // Deal Cards for dealer
  // Deal Cards
  return (
    // Provider Component
    <GameContext.Provider
      value={{
        deck: state.deck,
        player: state.player,
        dealer: state.dealer,
        shuffleDeck,
        deal,
      }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameState;
