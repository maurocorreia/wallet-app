import { DELETE_DATA, ITEM_EDIT, UPDATE_LIST, WALLET_DATA } from '../actions';

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
  case ITEM_EDIT:
    return { ...state, itemOnHold: action.item };
  case UPDATE_LIST:
    return {
      ...state,
      itemOnHold: undefined,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.update.id) {
          return action.update;
        }
        return expense;
      }),
    };
  default:
    return state;
  }
};

export default walletReducer;
