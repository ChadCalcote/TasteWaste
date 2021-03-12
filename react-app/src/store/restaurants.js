// Action Types
const SET_RESTAURANTS = "SET_RESTAURANTS";
const SET_ONE_RESTAURANT = "SET_ONE_RESTAURANT";
const SET_CITY_RESTAURANTS = "SET_CITY_RESTAURANTS";

// Actions
// Set Restaurants
export const setRestaurants = (restaurants) => {
  return {
    type: SET_RESTAURANTS,
    restaurants: restaurants,
  };
};
// Set One Restaurant
export const setOneRestaurant = (restaurant) => {
  return {
    type: SET_ONE_RESTAURANT,
    restaurant: restaurant,
  };
};
// Set All City Restaurants
export const setCityRestaurants = (restaurants) => {
  return {
    type: SET_CITY_RESTAURANTS,
    restaurants: restaurants,
  };
};
// Action Creators (Thunks)
// Fetch All Restaurants and dispatch to store
export const fetchAllRestaurants = () => {
  return async (dispatch) => {
    const responseFromDb = await fetch("/api/restaurants");
    const restaurantsList = await responseFromDb.json();
    dispatch(setRestaurants(restaurantsList));
  };
};
// Fetch One Restaurant and dispatch to store
export const fetchOneRestaurant = (restaurantId) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/restaurants/${restaurantId}`);
    const restaurant = await responseFromDb.json();
    dispatch(setOneRestaurant(restaurant));
  };
};
// Fetch All Restaurants from city and dispatch to store
export const fetchCityRestaurants = (city) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/restaurants/${city}`);
    const restaurants = await responseFromDb.json();
    dispatch(setCityRestaurants(restaurants));
  };
};
// Setup initial state
const initialState = [];

// All restaurant store information lives here and is sent to root reducer
const restaurantsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_RESTAURANTS:
      newState = action.restaurants;
      return newState;
    case SET_ONE_RESTAURANT:
      newState = action.restaurant;
      return newState;
    case SET_CITY_RESTAURANTS:
      newState = action.restaurants;
      return newState;
    default:
      return state;
  }
};

export default restaurantsReducer;
