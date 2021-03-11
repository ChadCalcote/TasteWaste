// Action Type
const SET_CURRENT_USER = "SET_CURRENT_USER";
// Action - Set Current User to store
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user: user,
  };
};
// Action Creator (Thunk)
// Set Current User To Store
export const getCurrentUser = () => async (dispatch) => {
  const response = await fetch("/api/auth");
  const current_user = await response.json();
  dispatch(setCurrentUser(current_user));
};
// Setup Initial State
const initialState = {};
// All Session Store Info lives here and is sent to Root Reducer
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
