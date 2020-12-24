import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  menu: {
    paddingBottom: "30px",
    height: "30px",
  },
  menuLinks: {
    // backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "space-around",
    position: "absolute",
    top: "0",
    width: "100%",
    height: "30px",
    borderBottom: "1px solid black",

    "$ ::hover": {
      color: "blue",
    },

    "& a": {
      textDecoration: "none",
    },
  },
});

export default useStyles;
