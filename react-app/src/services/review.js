// Helper Function to Add Reviews to Database
const addReview = async (
  userS,
  restaurantS,
  body,
  ratingS,
  bags,
  utensils,
  napkins,
  cups,
  bowls,
  straws
) => {
  const user = parseInt(userS);
  const restaurant = parseInt(restaurantS);
  const rating = parseInt(ratingS);
  const response = await fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      restaurant,
      body,
      rating,
      bags,
      utensils,
      napkins,
      cups,
      bowls,
      straws,
    }),
  });
  return await response.json();
};

export default addReview;
