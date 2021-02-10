import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import { logout } from "../services/auth";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
import AssignmentReturnRoundedIcon from "@material-ui/icons/AssignmentReturnRounded";
import { makeStyles } from "@material-ui/core/styles";
import SignInModal from "./auth/SignInModal";
import SignUpDrawer from "./auth/SignUpDrawer";
import LogoutButton from "./auth/LogoutButton";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
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
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Dropdown({authenticated, setAuthenticated}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    return <Redirect to="/home" />;
  };

  return (
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
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppSharpIcon fontSize="small" />
          </ListItemIcon>
          <SignInModal
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <ArrowUpwardSharpIcon fontSize="small" />
            </ListItemIcon>
            <SignUpDrawer
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </StyledMenuItem>
        <NavLink
          style={{ textDecoration: "none" }}
          to="/home"
          onClick={onLogout}
          exact={true}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <AssignmentReturnRoundedIcon fontSize="small" />
            </ListItemIcon>
            <LogoutButton setAuthenticated={setAuthenticated}/>
          </StyledMenuItem>
        </NavLink>
      </StyledMenu>
    </div>
  );
}