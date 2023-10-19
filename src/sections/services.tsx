import ServiceCard from "@/components/ServiceCard";
import { SERVICE_DATA } from "@/data/serviceData";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";

const Services = () => {
  const data = SERVICE_DATA;

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
      <Box sx={{ maxWidth: "1100px", padding: "0 100px" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "44px",
            fontWeight: "900",
            textAlign: "left",
            width: "100%",
            marginBottom: "70px",
          }}
        >
          Our services
        </Typography>
        <Grid container spacing={1} alignItems="stretch">
          {data.map((item, index) => (
            <Grid
              xs={12}
              md={data.length % 2 !== 0 && index === data.length - 1 ? 12 : 6}
              key={item.id}
              display="flex"
              flexDirection="column"
              padding="12px"
            >
              <ServiceCard
                imageurl={item.imageurl}
                title={item.title}
                content={item.content}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
