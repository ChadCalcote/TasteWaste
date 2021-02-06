const SET_REVIEW = "SET_REVIEW";
const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";


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

export const createReview = (data) => {
  return async (dispatch) => {
    const responseFromDb = await fetch(`/api/reviews`, {
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
    default:
      return state;
  }
};
export default reviewsReducer;