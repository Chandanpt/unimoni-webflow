import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";

const ServicesCard = (props) => {


  return (
    <Card
      sx={{
        padding: "32px 32px 20px 20px",
        backgroundColor: "rgba(248, 249, 251, .12)",
        borderRadius: "16px",
        height: "100%",
        boxShadow: "none"
      }}
    >
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Box
          sx={{
            padding: "18px",
            borderRadius: "6px",
            backgroundColor: "#5273a8",
            marginRight: "24px",
            marginBottom: "24px",
          }}
        >
          <Image
            src={props.imageurl}
            alt={props.title}
            width={24}
            height={24}
          />
        </Box>
        <Typography
          variant="h3"
          sx={{
            color: "white",
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "24px",
          }}
        >
          {props.title}
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{ color: "white", fontWeight: "400", lineHeight: "24px" }}
      >
        {props.content}
      </Typography>
    </Card>
  );
};

export default ServicesCard;
