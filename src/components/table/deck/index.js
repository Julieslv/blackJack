import React, { useState, useEffect, useReducer, useContext, Fragment } from 'react';
import { GlobalContext } from '../../../context/blackjack/deckState';
import styled from 'styled-components';

export const Deck = () => {
  const { deck } = useContext(GlobalContext);

  // console.log(deck);

  const shuffle = () => {
    console.log('shuffle')
    deck.sort(() => Math.random() - 0.5);
  }




  // const [currentDeck, setCurrentDeck] = useState([]);
  // const [loading, setLoading] = useState(false);


  // setCurrentDeck(cardDeck);
  // setLoading(false);
  // console.log(JSON.stringify(cardDeck));
  return (
    <Fragment>
            <button onClick={shuffle}>Shuffle</button>
    <DeckEl>
      {deck.map((card, index) => (
        <CardEl
          key={card.id}
          className={
            card.suit === 'hearts' || card.suit === 'diamonds'
              ? 'suitRed'
              : 'suitBlack'
          }>
          <span>{card.value}</span>
          <span className='hidden'>{card.suit}</span>
          <span>{card.symbol}</span>
        </CardEl>
      ))}
    </DeckEl>

    </Fragment>
  );
};

const DeckEl = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 7px 7px;
`;
const CardEl = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 0.5rem 0.25rem;
  &.suitRed {
    color: #ff0000;
  }

  .hidden {
    visibility: hidden;
    display: none;
  }
`;
