import React from "react";
import Drawer from "@material-ui/core/Drawer";
import SignUpForm from "./SignUpForm";

export default function SignUpDrawer({
  authenticated,
  setAuthenticated,
  open,
  setOpen,
}) {
  return (
    <div>
      <div style={{ color: "#f37588" }}>Sign Up</div>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <SignUpForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          closeDrawer={() => setOpen(false)}
        />
      </Drawer>
    </div>
  );
}
