import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import restaurantsReducer from "./restaurants.js";
import reviewsReducer from "./reviews.js";
import usersReducer from "./users.js";
import citiesReducer from "./cities.js";
import sessionReducer from "./session";

const rootReducer = combineReducers({
  session: sessionReducer,
  restaurants: restaurantsReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  cities: citiesReducer
});

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
