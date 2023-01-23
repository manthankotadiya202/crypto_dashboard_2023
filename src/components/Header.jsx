import { alpha, makeStyles, createTheme } from "@material-ui/core/styles";
import { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Select,
  MenuItem,
  ThemeProvider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { searchContext } from "../SearchContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    cursor: "pointer",
    fontWeight: "bold",
    color: "gold",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "gold",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    color: "gold",

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  // const { id } = useParams();

  const { setSearch, isSearch } = useContext(searchContext);

  const { currency, setCurrency } = CryptoState();
  console.log(isSearch);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
        type: "dark",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <div>
            <Toolbar>
              <Typography
                onClick={() => navigate("/")}
                className={classes.title}
              >
                <h2>Crypto DashBoard</h2>
              </Typography>

              {isSearch && (
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search Coin…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    style={{ border: "1px solid gold" }}
                    inputProps={{ "aria-label": "search" }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              )}
              <Select
                variant="outlined"
                style={{
                  width: 100,
                  height: 40,
                  marginLeft: 15,
                  color: "gold",
                  border: "1px solid gold",
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
                <MenuItem value={"CAD"}>CAD</MenuItem>
              </Select>
            </Toolbar>
          </div>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
export default Header;
