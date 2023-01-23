import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import { searchContext } from "../SearchContext";
import { useContext } from "react";
const Homepage = () => {
  const { setisSearch } = useContext(searchContext);
  setisSearch(true);
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;
