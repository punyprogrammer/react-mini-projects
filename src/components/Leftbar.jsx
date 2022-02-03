import { makeStyles } from "@mui/styles";
import React from "react";
import Container from "@mui/material/Container";
import { Home } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import Typography from "@mui/material/Typography";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(5),
    backgroundColor: "#1976D2",
    height: "100vh",
    position: "sticky",
    top: 0,
    color: "black",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#ffffff",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: "#1976D2",
    },
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
      "&:hover": {
        color: "white",
      },
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "large",
    },
  },
}));
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCameraIcon className={classes.icon} />
        <Typography className={classes.text}>Photos</Typography>
      </div>
      <div className={classes.item}>
        <VideoLibraryIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <AppsIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <BookmarkIcon className={classes.icon} />
        <Typography className={classes.text}>Bookmarks</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToAppIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
