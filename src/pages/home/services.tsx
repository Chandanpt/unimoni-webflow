import ServicesCard from "@/components/servicesCard";
import { Box, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#19468d",
        borderRadius: "40px",
        width: "100%",
        padding: "100px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1500px", padding: "0 100px" }}>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontSize: "44px",
            fontWeight: "900",
            textAlign: "left",
            width: "100%",
            marginBottom: "70px"
          }}
        >
          Our services
        </Typography>
        <ServicesCard />
      </Box>
    </Box>
  );
};

export default Services;
