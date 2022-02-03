import { createTheme } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    // primary: {
    //   main: green[500],
    // },
    notifications: {
      main: "#f50057",
    },
  },
  successButton: {
    backgroundColor: green[400],
    borderRadius: "10px",
  },
});
