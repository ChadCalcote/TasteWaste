import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "rgba(255, 255, 255, .9)",
    borderRadius: 12,
    boxShadow: theme.shadows[5],
    outline: "none",
    padding: theme.spacing(6),
  },
}));

export default function SignInModal({
  authenticated,
  setAuthenticated,
  setUser,
  open,
  setOpen,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <LoginForm
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        closeModal={() => setOpen(false)}
        setUser={setUser}
      />
    </div>
  );

  return (
    <div>
      <div style={{ color: "#f37588" }}>Sign In</div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
