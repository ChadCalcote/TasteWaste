// Action Types
const SET_REVIEW = "SET_REVIEW";
const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
const REMOVE_ONE_REVIEW = "REMOVE_ONE_REVIEW";

// Actions
// Set one review to the store
export const setReview = (review) => {
  return {
    type: SET_REVIEW,
    review: review,
  };
};
// Better name would be setReviews
// Sets reviews to the store
export const getAllReviews = (reviews) => {
  return {
    type: GET_ALL_REVIEWS,
    reviews: reviews,
  };
};
// Removes one review from store
export const removeOneReview = (review) => ({
  type: REMOVE_ONE_REVIEW,
  payload: review,
});
// Action Creators (Thunks)
// Deletes Review from store
export const deleteReview = (reviewId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const review = await response.json();
      dispatch(removeOneReview(review));
    }
  };
};
// Creates Review and adds to store
export const createReview = (data) => {
  return async (dispatch) => {
    const responseFromDb = await fetch("/api/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (responseFromDb.ok) {
      const review = await responseFromDb.json();
      dispatch(setReview(review));
    }
  };
};
// Fetch All Reviews and set to store
export const fetchAllReviews = (restaurantId) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(
      `/api/restaurants/${restaurantId}/reviews`
    );
    const reviewsList = await responseFromDb.json();
    dispatch(getAllReviews(reviewsList));
  };
};
// Setup initial state
const initialState = {};
// All reviews state lives here and is sent to root reducer
const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_REVIEW:
      newState = { state, ...action.review };
      return newState;
    case GET_ALL_REVIEWS:
      newState = action.reviews;
      return newState;
    case REMOVE_ONE_REVIEW:
      newState = [...state.filter((review) => review.id !== action.payload.id)];
      return newState;
    default:
      return state;
  }
};
export default reviewsReducer;
