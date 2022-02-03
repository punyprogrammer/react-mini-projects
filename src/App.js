import "./App.css";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { green } from "@mui/material/colors";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
const useStyles = makeStyles((theme) => ({
  rightbar: {
    padding: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.rightbar}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
