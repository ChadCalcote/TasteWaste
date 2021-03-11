// Action Types
const SET_SINGLE_USER = "SET_SINGLE_USER";
const SET_ALL_USERS = "SET_ALL_USERS";
// Actions
// Set Single User to store
export const setSingleUser = (user) => {
  return {
    type: SET_SINGLE_USER,
    user: user,
  };
};
// Set All Users to store
export const setAllUsers = (users) => {
  return {
    type: SET_ALL_USERS,
    users: users
  };
};
// Action Creators (Thunks)
// Fetch one user and dispatch action to store
export const fetchSingleUser = (userId) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/users/${userId}`);
    const user = await responseFromDb.json();
    dispatch(setSingleUser(user));
  };
};
// Fetch all users and dispatch action to store
export const fetchAllUsers = () => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/users/`);
    const users = await responseFromDb.json();
    dispatch(setAllUsers(users));
  };
};
// Setup initial state
const initialState = {};
// All User Store Info lives here and is sent to root reducer
const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_SINGLE_USER:
      newState = action.user;
      return newState;
    case SET_ALL_USERS:
      newState = action.users;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;