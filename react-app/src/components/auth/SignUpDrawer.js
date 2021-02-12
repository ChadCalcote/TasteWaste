import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import SignUpForm from "./SignUpForm";

export default function SignUpDrawer({authenticated, setAuthenticated}) {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(true)
    }
  return (
    <div>
      <div style={{ color: "#f37588" }} onClick={handleDrawer}>
        Sign Up
      </div>
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
