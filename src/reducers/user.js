import { LOGIN_DATA } from '../actions';

const INITIAL_STATE = {
    email: ''
};

export const user= (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_DATA:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
};

export default user;