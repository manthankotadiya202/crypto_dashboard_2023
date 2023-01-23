import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./bannerPic.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",

    display: "flex",
    alignItems: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.banner}>
        <div className={classes.bannerContent}>
          <div className={classes.tagline}>
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
              }}
            >
              Crypto Dashboard
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "white",
                textTransform: "capitalize",
                fontFamily: "Monserrat",
              }}
            >
              Get all the info regarding your fevorite Crypto Currency
            </Typography>
          </div>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default Banner;
