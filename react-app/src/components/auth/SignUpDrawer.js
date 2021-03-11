// React Dependecies
import React from "react";
// Material UI Dependencies
import Drawer from "@material-ui/core/Drawer";
// Components
import SignUpForm from "./SignUpForm";

// Define SignUpDrawer component with destructured props
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
