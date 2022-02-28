import { WALLET_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_DATA:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  default:
    return state;
  }
};

export default walletReducer;
