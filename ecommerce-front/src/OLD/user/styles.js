import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  formGroup: {
    // backgroundColor: "blue",
    margin: "5px",
    // padding: "20px 0 0 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0",

    "& input": {
      maxHeight: "30px",
      maxWidth: "200px",
    },
  },

  signUpForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "right",
    border: "2px solid black",
    padding: "10px",
  },
});

export default useStyles;
