// ACTION TYPES.
export const LOGIN_DATA = 'LOGIN_DATA';
export const WALLET_DATA = 'WALLET_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const ITEM_EDIT = 'ITEM_EDIT';
export const UPDATE_LIST = 'UPDATE_LIST';

export const loginData = (email) => ({
  type: LOGIN_DATA,
  email,
});

export const walletData = (data) => ({
  type: WALLET_DATA,
  expenses: data,
});

export const deleteData = (expenseUnit) => ({
  type: DELETE_DATA,
  expenseUnit,
});

export const itemEdit = (item) => ({
  type: ITEM_EDIT,
  item,
});

export const updateList = (update) => ({
  type: UPDATE_LIST,
  update,
});
