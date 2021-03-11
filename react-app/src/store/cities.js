// Action Type
const SET_ONE_CITY = "SET_ONE_CITY"

// Action - Set One City to the store
export const setOneCity = (city) => {
  return {
    type: SET_ONE_CITY,
    city: city,
  };
};

// Action Creator (Thunk)
// Takes Data (city) and dispatches inside itself - dispatching eventually to reducer
// Thunk allows us to deal with asynchronous calls
// This fetches once city from API route based on input
// Then dispatches that action to the reducer
export const fetchOneCity = (city) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/cities/${city}`);
    const found_city = await responseFromDb.json();
    dispatch(setOneCity(found_city));
  };
};
// Setup initial state
const initialState = [];
// All city information in store lives here and is sent up to the root reducer
const citiesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_ONE_CITY:
      newState = action.city;
      return newState;
    default:
      return state;
  }
};

export default citiesReducer;