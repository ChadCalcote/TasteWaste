const SET_CURRENT_USER = "SET_CURRENT_USER";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user: user,
  };
};

export const getCurrentUser = () => async (dispatch) => {
  const response = await fetch(`/api/auth/`);
  const current_user = await response.json();
  dispatch(setCurrentUser(current_user));
};

const initialState = {};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_CURRENT_USER:
      newState = action.user;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
