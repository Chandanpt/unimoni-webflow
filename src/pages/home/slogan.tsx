import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import family from "../../assets/istockphoto-1477970026-170667a.webp";

const Slogan = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#19468d",
        backgroundColor: "#fff",
        padding: "110px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{maxWidth: "1100px", padding: "0 100px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <Box sx={{ marginRight: "16px", color: "#434854" }}>
        <Image
          src="https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65114cae2edd027370e7c81c_ULogo.svg"
          alt="Logo"
          height={50} width={200}
        />
        <Typography variant="h3" fontWeight="900">
          Because dreams have no boundaries
        </Typography>
        <Typography fontWeight="400" lineHeight="24px" marginTop="24px" maxWidth="350px">
          We provide life enablement. We transcend geography, distance, time
          zones, culture and currencies, to enable people to move money wherever
          it needs to be, in the most time and cost-e cient manner.
        </Typography>
      </Box>
      <Box>
        <Image
          src={family}
          alt="carousel"
          height={340}
          width={520}
          style={{borderRadius:"40px"}}
        />
      </Box>
      </Box>
    </Box>
  );
};

export default Slogan;