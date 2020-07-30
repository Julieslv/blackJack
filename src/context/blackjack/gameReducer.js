import { SHUFFLE_DECK } from './../types';
export default (state, action) => {
  switch (action.type) {
    case SHUFFLE_DECK:
      return {
        ...state,
        // deck: action.payload,
      };
    default:
      return state;
  }
};
