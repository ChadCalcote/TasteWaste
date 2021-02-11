const SET_SINGLE_USER = "SET_SINGLE_USER";
const SET_ALL_USERS = "SET_ALL_USERS";

export const setSingleUser = (user) => {
  return {
    type: SET_SINGLE_USER,
    user: user,
  };
};

export const setAllUsers = (users) => {
  return {
    type: SET_ALL_USERS,
    users: users
  };
};

export const fetchSingleUser = (userId) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/users/${userId}`);
    const user = await responseFromDb.json();
    dispatch(setSingleUser(user));
  };
};

export const fetchAllUsers = () => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/users/`);
    const users = await responseFromDb.json();
    dispatch(setAllUsers(users));
  };
};

const initialState = {};

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