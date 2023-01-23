import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  selectbutton: {
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: onselect ? "gold" : "",
    color: onselect ? "black" : "",
    fontWeight: onselect ? 700 : 500,
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
    width: "22%",
    //   margin: 5,
  },
});
const SelectButton = ({ children, selected, onClick }) => {
  const classes = useStyles();
  return (
    <button onClick={onClick} className={classes.selectbutton}>
      {children}
    </button>
  );
};

export default SelectButton;
