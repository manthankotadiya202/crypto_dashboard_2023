import React from "react";
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
      <Header />
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;
