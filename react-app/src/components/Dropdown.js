// React Dependencies
import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
// Services
import { logout } from "../services/auth";
// Material UI Items
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";
import AssignmentReturnRoundedIcon from "@material-ui/icons/AssignmentReturnRounded";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import { makeStyles } from "@material-ui/core/styles";
// Local Components
import SignInModal from "./auth/SignInModal";
import SignUpDrawer from "./auth/SignUpDrawer";

const useStyles = makeStyles({
  root: {
    appearance: "none",
    background: "transparent",
    borderRadius: 3,
    border: 0,
    boxShadow: "none",
    color: "white",
    minWidth: "auto",
    padding: 0,
  },
  label: {
    textTransform: "capitalize",
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    color: "#f37588",
    "& svg": {
      fill: "#f37588",
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
      "& svg": {
        fill: "#fff",
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
      "& svg": {
        fill: "#fff",
      },
    },
  },
}))(MenuItem);

export default function Dropdown({ authenticated, setAuthenticated, setUser }) {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logInModalIsOpen, setLogInModalIsOpen] = useState(false);
  const [signUpDrawerIsOpen, setSignUpDrawerIsOpen] = useState(false);

  const handleLogInModalOpen = () => {
    setLogInModalIsOpen(true);
  };

  const handleSignUpDrawerOpen = () => {
    setSignUpDrawerIsOpen(true);
  };

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async (e) => {
    e.preventDefault();
    await logout();
    setAuthenticated(false);
    setUser();
    history.push("/");
  };

  return (
    <Fragment>
      <div>
        <Button
          classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          <AccountCircleRoundedIcon fontSize="large" />
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {!authenticated && (
            <StyledMenuItem onClick={handleLogInModalOpen}>
              <ListItemIcon>
                <ExitToAppSharpIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sign in" />
            </StyledMenuItem>
          )}
          {!authenticated && (
            <StyledMenuItem onClick={handleSignUpDrawerOpen}>
              <ListItemIcon>
                <ArrowUpwardSharpIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sign up" />
            </StyledMenuItem>
          )}
          {authenticated && (
            <StyledMenuItem onClick={onLogout}>
              <ListItemIcon>
                <AssignmentReturnRoundedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </StyledMenuItem>
          )}
        </StyledMenu>
      </div>

      <SignInModal
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        setUser={setUser}
        open={logInModalIsOpen}
        onClose={() => setLogInModalIsOpen(false)}
      />

      <SignUpDrawer
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        open={signUpDrawerIsOpen}
        onClose={() => setSignUpDrawerIsOpen(false)}
      />
    </Fragment>
  );
}
