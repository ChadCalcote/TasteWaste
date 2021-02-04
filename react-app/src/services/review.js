const addReview = async (user, restaurant, body, rating, bags, utensils, napkins, cups, bowls, straws) => {
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
      straws
    }),
  });
  return await response.json();
};

export default addReview;
