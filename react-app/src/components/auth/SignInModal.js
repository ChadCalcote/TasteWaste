// React Dependencies
import React from "react";
// Material UI Dependencies
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
// Components
import LoginForm from "./LoginForm";

// Modal Styles
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "rgba(255, 255, 255, .9)",
    borderRadius: 12,
    boxShadow: theme.shadows[5],
    outline: "none",
    padding: theme.spacing(6),
  },
}));

// Define SignInModal Component with destructured props
export default function SignInModal({
  authenticated,
  setAuthenticated,
  setUser,
  open,
  onClose,
}) {

  // Component Functions / Variables

  // Set styles to variable for use
  const classes = useStyles();

  // Modal content
  const body = (
    <div className={classes.paper}>
      <LoginForm
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        closeModal={() => onClose()}
        setUser={setUser}
      />
    </div>
  );

  // Modal to return
  return (
    <Modal
      className="modal"
      open={open}
      onClose={() => onClose()}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
