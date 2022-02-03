import { makeStyles } from "@mui/styles";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(6),
  },
}));
const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        sx={{
          height: {
            sm: "240px",
            xs: "160px",
          },
        }}
        image="https://images.unsplash.com/photo-1494247622028-9a5bbfbf529a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXRpZnVsJTIwYmlyZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="A Blue-gray Gnatcatcher sits perched in a beautiful pink cherry blossom tree"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: {
              sm: "25px",
              xs: "22px",
            },
          }}
        >
          A Blue-gray Gnatcatcher sits perched in a beautiful pink cherry
          blossom tree
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: {
              sm: "16px",
              xs: "13px",
            },
          }}
          color="text.secondary"
        >
          The blue-gray gnatcatcher's breeding habitat includes open deciduous
          woods and shrublands in southern Ontario, the eastern and southwestern
          United States, and Mexico. Though gnatcatcher species are common and
          increasing in number while expanding to the northeast,[5][full
          citation needed] it is the only one to breed in Eastern North America.
          They migrate to the southern United States, Mexico, northern Central
          America (Belize, Guatemala, and Honduras), Cuba, the Bahamas, the
          Turks and Caicos Islands, and the Cayman Islands.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
