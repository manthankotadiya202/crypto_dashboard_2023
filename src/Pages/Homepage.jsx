import React from "react";
import Container from "@material-ui/core/Container";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import { searchContext } from "../SearchContext";
import { useContext } from "react";
import Header from "../components/Header";
const Homepage = () => {
  const { setisSearch } = useContext(searchContext);
  setisSearch(true);
  return (
    <>
      <Container maxWidth={false}>
        <div
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
          <Banner />
          <CoinsTable />
        </div>
      </Container>
    </>
  );
};

export default Homepage;
