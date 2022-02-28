import { DELETE_DATA, WALLET_DATA } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_DATA:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case DELETE_DATA:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense !== action.expenseUnit),
    };
  default:
    return state;
  }
};

export default walletReducer;
