import React from "react";
import Drawer from "@material-ui/core/Drawer";
import SignUpForm from "./SignUpForm";

export default function SignUpDrawer({
  authenticated,
  setAuthenticated,
  open,
  onClose,
}) {
  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => onClose()}>
        <SignUpForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          closeDrawer={() => onClose()}
        />
      </Drawer>
    </div>
  );
}
