import { makeStyles } from "@mui/styles";
import React from "react";
import Container from "@mui/material/Container";
import { Home } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Post from"./Post"
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
  },
}));
const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
<Post/>
<Post/>
<Post/>
<Post/>
    </Container>
  );
};

export default Feed;
