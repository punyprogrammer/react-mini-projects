import { makeStyles } from "@mui/styles";
import React from "react";
import Container from "@mui/material/Container";
import { Home } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.logo} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
    </Container>
  );
};

export default Rightbar;
