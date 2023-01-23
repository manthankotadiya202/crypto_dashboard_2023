import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import Container from "@material-ui/core/Container";
import { searchContext } from "./SearchContext";
import { useState } from "react";
import Header from "./components/Header";
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  let [isSearch, setisSearch] = useState(true);
  return (
    <>
      <Container maxWidth={false}>
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
      </Container>
    </>
  );
}

export default App;
