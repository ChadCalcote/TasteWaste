// React Dependencies
import React from "react";
// Material UI dependencies
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
// Components
import ReviewForm from "../ReviewForm";

// Modal Styles
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

// Review Modal Component with destructured props
export default function ReviewModal({
  authenticated,
  user,
  restaurant,
  reviewsToDisplay,
  setReviewsToDisplay,
  open,
  setOpen,
}) {
  // Component Functions/Variables

  // Set Styles to variable for use
  const classes = useStyles();

  // Handle the close of the modal
  const handleClose = () => {
    setOpen(false);
  };

  // Content of Modal
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

  // Modal to return
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
