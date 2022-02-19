// ACTION TYPES.
export const LOGIN_DATA = 'LOGIN_DATA';

export const loginData = (email) => ({
  type: LOGIN_DATA,
  payload: {
    email,
  },
});
