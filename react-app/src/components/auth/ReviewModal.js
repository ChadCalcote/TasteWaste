import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ReviewForm from "../ReviewForm";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "rgba(255, 255, 255, .9)",
    borderRadius: 12,
    boxShadow: theme.shadows[5],
    maxWidth: 600,
    outline: "none",
    padding: theme.spacing(6),
  },
}));

export default function ReviewModal({
  authenticated,
  setAuthenticated,
  user,
  restaurant,
  reviewsToDisplay,
  setReviewsToDisplay,
  open,
  setOpen,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <ReviewForm
        authenticated={authenticated}
        closeModal={() => setOpen(false)}
        user={user}
        restaurant={restaurant}
        reviewsToDisplay={reviewsToDisplay}
        setReviewsToDisplay={setReviewsToDisplay}
      />
    </div>
  );

  return (
    <Modal
      className="modal"
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
