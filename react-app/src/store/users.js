const SET_SINGLE_USER = "SET_SINGLE_USER";

export const setSingleUser = (user) => {
  return {
    type: SET_SINGLE_USER,
    user: user,
  };
};

export const fetchSingleUser = (userId) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/users/${userId}`);
    const user = await responseFromDb.json();
    dispatch(setSingleUser(user));
  };
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_SINGLE_USER:
      newState = action.user;
      return action.user;
    default:
      return state;
  }
};

export default usersReducer;