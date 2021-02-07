const SET_ONE_CITY = "SET_ONE_CITY"

export const setOneCity = (city) => {
  return {
    type: SET_ONE_CITY,
    city: city,
  };
};

export const fetchOneCity = (city) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/cities/${city}`);
    const found_city = await responseFromDb.json();
    dispatch(setOneCity(found_city));
  };
};

const initialState = [];

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