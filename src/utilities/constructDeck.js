import { v4 as uuidv4 } from 'uuid';


const makeDeck = () => {
  const suits = ['spades', 'diamonds', 'clubs', 'hearts'];
  const values = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', ];

  suits.map(suit => {
    let symbol =
      suit === 'spades'
        ? '♠'
        : suit === 'diamonds'
        ? '♦'
        : suit === 'clubs'
        ? '♣'
        : '♥';

    values.forEach(value => {
      var card = {
        id: uuidv4(),
        value: value,
        suit: suit,
        symbol: symbol,
      };
      cardDeck.push(card);
    });
  });
};

export const cardDeck = [];

makeDeck();
