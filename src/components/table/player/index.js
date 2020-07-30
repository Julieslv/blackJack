import React, { useContext } from 'react';
import gameContext from './.././../../context/blackjack/gameContext';

export const Player = () => {
  const context = useContext(gameContext);

  return <div>Player needs two cards</div>;
};
