import React, { useContext, Fragment } from 'react';
import GameContext from '../../../context/blackjack/gameContext';
import Button from './../../button/';
import styled from 'styled-components';

export const Deck = () => {
  const { deck, shuffleDeck, hit, deal } = useContext(GameContext);

  return (
    <Fragment>
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
      <ActionEl>
        <Button text='Shuffle' action={shuffleDeck} />
        <Button text='Deal' action={deal} />
        <Button text='Hit me!' action={hit} />
      </ActionEl>
    </Fragment>
  );
};

const ActionEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.875rem;
`;

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
