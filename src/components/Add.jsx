import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import SpeedDial from "@mui/material/SpeedDial";
import Modal from "@mui/material/Modal";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import TextField from "@mui/material/TextField";

import Tooltip from "@mui/material/Tooltip";
import Fab from "@mui/material/Fab";
import Home from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { Button, MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  container: {
    backgroundColor: "white",

    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",

    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100vw",
    },
  },
  item: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  modalContainer: {
    // [theme.breakpoints.down("sm")]: {
    //   height: "100vh",
    //   width: "100vw",
    // },
  },
}));
const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
      setOpenSnack(false);
    }
  };
  return (
    <Container className={classes.modalContainer}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<AddIcon />}
        onClick={() => setOpen(true)}
      ></SpeedDial>
      <Modal open={open}>
        {/* <ClickAwayListener onClickAway={() => setOpen(false)}> */}
        <Container
          className={classes.container}
          sx={{
            height: {
              sm: 550,
              xs: "100vh",
            },
            width: {
              sm: 480,
              xs: "100vw",
            },
          }}
        >
          <form autoComplete="off" className={classes.form}>
            <div className={classes.item}>
              <TextField
                label="Title"
                //
                variant="standard"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                label="Desc"
                multiline
                rows={4}
                variant="outlined"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                label="Title"
                variant="standard"
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <Select value="Public" label="Visibility">
                <MenuItem value="Public" label="Public">
                  Public
                </MenuItem>
                <MenuItem value="Private" label="Private">
                  Private
                </MenuItem>

                <MenuItem value="Custom" label="Custom">
                  Custom
                </MenuItem>
              </Select>
            </div>
            <div className={classes.item}>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: "6px" }}
                onClick={() => setOpenSnack(true)}
              >
                SUBMIT
              </Button>
              <Button
                color="danger"
                variant="contained"
                style={{ marginRight: "6px" }}
                onClick={() => setOpen(false)}
              >
                CANCEL
              </Button>
            </div>
          </form>
        </Container>
        {/* </ClickAwayListener> */}
      </Modal>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={() => setOpenSnack(false)}
      >
        <Alert
          onClose={() => setOpenSnack(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post Submitted!!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Add;
