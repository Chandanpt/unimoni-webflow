import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";
import { ServiceDataTypes } from "@/data/serviceData";

const ServicesCard: React.FC<ServiceDataTypes> = ({imageurl, title, content}) => {


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
            src={imageurl}
            alt={title}
            width={24}
            height={24}
          />
        </Box>
        <Typography
          sx={{
            color: "white",
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "24px",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{ color: "white", fontWeight: "400", lineHeight: "24px" }}
      >
        {content}
      </Typography>
    </Card>
  );
};

export default ServicesCard;
