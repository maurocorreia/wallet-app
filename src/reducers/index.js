import { LOGIN_DATA } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_DATA:
    return { ...state, user: { email: action.payload.email } };
  default:
    return state;
  }
};

export default reducer;
