import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";

import { searchContext } from "./SearchContext";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
  },
}));

function App() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  let [isSearch, setisSearch] = useState(true);
  return (
    <>
      <BrowserRouter basename="/crypto_dashboard_2023">
        <div className={classes.App}>
          <searchContext.Provider
            value={{ search, setSearch, isSearch, setisSearch }}
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/coins/:id" element={<Coinpage />} />
            </Routes>
          </searchContext.Provider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
