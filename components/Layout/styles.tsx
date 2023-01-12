import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;
const barHeight = 64;

export const useStyles = makeStyles({
  layout: {
    width: `calc(100% + ${drawerWidth}px)`,
    height: `calc(100% + ${barHeight}px)`,
    backgroundImage: "linear-gradient(to bottom, #ecf0f1, #bdc3c7)",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
  },
});
