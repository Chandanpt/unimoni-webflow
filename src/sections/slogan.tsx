import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import family from "../assets/istockphoto-1477970026-170667a.webp";
import svg from "../assets/whitecurvebg.svg";
import Carousel from "@/components/Carousel";
import slogan1 from "../assets/1-p-800.png";
import slogan2 from "../assets/2-p-800.png";
import slogan3 from "../assets/3-p-800.png";

const Slogan = () => {

  const mySwiperStyle: React.CSSProperties = {
    width: "530px",
    height: "300px",
    borderRadius: "40px"
  };

  const mySlideStyle: React.CSSProperties = {
    
  };

  const myImageStyle: React.CSSProperties = {
    height: "100%",
    width: "100%"
  };

  const images = [
    slogan1, slogan2, slogan3
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#19468d",
        display: "flex",
        alignItems: "center",
        padding: "110px 0",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >

      <Image
        src={svg}
        alt="svg"
        height={200}
        width={500}
        style={{
          position: "absolute",
          minHeight: "1000px ",
          left: "-250px",
          width: "100vw",
        }}
      />
      <Box
        sx={{
          maxWidth: "1500px",
          padding: "0 100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: "2",width: "100%"
        }}
      >
          <Box marginRight="40px">
          <Image
            src="https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65114cae2edd027370e7c81c_ULogo.svg"
            alt="Logo"
            height={50}
            width={200}
          />
          <Typography fontWeight="900" fontSize="44px">
            Because dreams have no boundaries
          </Typography>
          <Typography
            fontWeight="400"
            lineHeight="24px"
            marginTop="24px"
            maxWidth="400px"
            fontSize="20px"
          >
            We provide life enablement. We transcend geography, distance, time
            zones, culture and currencies, to enable people to move money
            wherever it needs to be, in the most time and cost-e cient manner.
          </Typography>
          </Box>
          <Box>
          <Carousel
      swiperStyle={mySwiperStyle}
      slideStyle={mySlideStyle}
      imageStyle={myImageStyle}
      images={images}
    />
          </Box>
      </Box>
    </Box>
  );
};

export default Slogan;
