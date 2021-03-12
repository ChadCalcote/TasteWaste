// Redux Dependencies
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// Redux Thunk Dependency
import thunk from "redux-thunk";
// Custom Reducers
import restaurantsReducer from "./restaurants.js";
import reviewsReducer from "./reviews.js";
import usersReducer from "./users.js";
import citiesReducer from "./cities.js";
import sessionReducer from "./session";
// Setup Root Reducer with all reducers
const rootReducer = combineReducers({
  session: sessionReducer,
  restaurants: restaurantsReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  cities: citiesReducer,
});
// Boiler plate redux code
let enhancer;

if (process.env.NODE_ENV === "production") {
  // .env?
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
