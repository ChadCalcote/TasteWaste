const SET_REVIEW = "SET_REVIEW";
const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
const REMOVE_ONE_REVIEW = "REMOVE_ONE_REVIEW";

export const setReview = (review) => {
  return {
    type: SET_REVIEW,
    review: review,
  };
};

export const getAllReviews = (reviews) => {
  return {
    type: GET_ALL_REVIEWS,
    reviews: reviews,
  };
};

export const removeOneReview = (review) => ({
  type: REMOVE_ONE_REVIEW,
  payload: review,
});

export const deleteReview = (reviewId) => {
  return async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("REVIEW DELETED")
      const review = await response.json();
      dispatch(removeOneReview(review));
    }
  };
};

export const createReview = (data) => {
  return async (dispatch) => {
    const responseFromDb = await fetch("/api/reviews", {
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

export const fetchAllReviews = (restaurantId) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/restaurants/${restaurantId}/reviews`);
    const reviewsList = await responseFromDb.json();
    dispatch(getAllReviews(reviewsList));
  };
};

const initialState = {};

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