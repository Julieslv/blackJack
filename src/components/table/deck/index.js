import React, { Fragment } from 'react';
import styled from 'styled-components';

function deck() {
  const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
  const values = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];
  var cardDeck = [];
  const getDeck = newArray => {
    suits.map(suit => {
      let symbol =
        suit === 'spades'
          ? '♠'
          : suit === 'diamonds'
          ? '♦'
          : suit === 'clubs'
          ? '♣'
          : '♥';

      // console.log(symbol);
      values.forEach(value => {
        var card = { value: value, suit: suit, symbol: symbol };
        cardDeck.push(card);
      });
    });
    return cardDeck;
  };

  getDeck(cardDeck);
  console.log(cardDeck[0]);
  return (
    <Deck>
      {cardDeck.map((card, index) => (
        <Card
          key={index}
          className={
            card.suit === 'hearts' || card.suit === 'diamonds'
              ? 'suitRed'
              : 'suitBlack'
          }>
          <span>{card.value}</span>
          <span className='hidden'>{card.suit}</span>
          <span>{card.symbol}</span>
        </Card>
      ))}
    </Deck>
  );
}

const Deck = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 7px 7px;
`;
const Card = styled.div`
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

export default deck;
