import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import family from "../../assets/istockphoto-1477970026-170667a.webp";
import svg from "../../assets/2.svg";

const Slogan = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#19468d",
        // backgroundColor: "#fff",
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
          top: "-10px",
          position: "absolute",
          minHeight: "800px ",
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
            maxWidth="350px"
            fontSize="20px"
          >
            We provide life enablement. We transcend geography, distance, time
            zones, culture and currencies, to enable people to move money
            wherever it needs to be, in the most time and cost-e cient manner.
          </Typography>
          </Box>
          <Image
            src={family}
            alt="carousel"
            height={400}
            width={600}
            style={{ borderRadius: "40px" }}
          />
      </Box>
    </Box>
  );
};

export default Slogan;
