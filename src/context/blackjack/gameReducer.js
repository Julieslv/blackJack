import { CARD_DECK, DEAL_DEALER, DEAL_PLAYER } from './../types';
export default (state, action) => {
  switch (action.type) {
    case CARD_DECK:
      return {
        ...state,
        deck: action.payload,
      };
    case DEAL_DEALER:
      return {
        ...state,
        player: action.payload,
        deck: action.payload,
      };
    case DEAL_DEALER:
      return {
        ...state,
        dealer: action.payload,
      };
    default:
      return state;
  }
};
