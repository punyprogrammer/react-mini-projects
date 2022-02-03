import { makeStyles } from "@mui/styles";
import Grow from "@mui/material/Grow";
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  Avatar,
} from "@mui/material";
import React, { useState } from "react";
import Search from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";

import { Mail, Notifications } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";
const useStyles = makeStyles((theme) => ({
  navBar: {
    position: "sticky",
    top: 0,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    color: "white",
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "45%",
    //for mobile responsiveness
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
    transition: theme.transitions.create(["backgroundColor", "transform"], {
      duration: theme.transitions.duration.standard,
    }),
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  // badge: {
  //   marginRight: theme.spacing(2),
  // },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    //for mobile responsiveness
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
  },
  badge: {
    marginRight: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
    },
  },
  mobileSearch: {
    marginRight: theme.spacing(2),
    "&:hover": {
      cursor: "pointer",
    },
  },
  cancel: {
    display: "none",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "block" : "none"),
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.logoLg}>
          Amar Feed
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Amar
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <CancelIcon
            sx={{ display: { xs: "block", sm: "none" } }}
            className={classes.cancel}
            onClick={() => setOpen(false)}
          />
        </div>

        <div className={classes.icons}>
          <Search
            sx={{ display: { xs: "block", sm: "none" } }}
            className={classes.mobileSearch}
            onClick={() => setOpen(true)}
          />
          <Badge
            badgeContent={4}
            color="notifications"
            className={classes.badge}
          >
            <Mail />
          </Badge>
          <Badge
            badgeContent={2}
            color="notifications"
            className={classes.badge}
          >
            <Notifications />
          </Badge>
          <Avatar
            alt="Profile-Image"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
