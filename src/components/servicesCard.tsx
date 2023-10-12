import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";

const ServicesCard = () => {
  return (
    <Card sx={{ padding: "32px 32px 20px 20px", backgroundColor: "rgba(248, 249, 251, .12)", borderRadius: "16px" }}>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Box sx={{padding: "18px", borderRadius: "6px", backgroundColor: "#5273a8", marginRight: "24px", marginBottom: "24px"}}>
        <Image
          src="https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65116636de214ecb8a545093_Bank.svg"
          alt="bank transfer"
          width={24}
          height={24}
        />
        </Box>
        <Typography variant="h3" sx={{color: "white", fontSize: "32px", fontWeight: "600", marginBottom: "24px"}}>Bank Account Transfer</Typography>
      </Box>
      <Typography variant="subtitle1" sx={{color: "white", fontWeight: "400", fontSize: "24px"}}>
        Our bank transfer service enables you to send money to your
        beneficiary&apos;s bank account anywhere in the world in a safe and simple
        manner. To reach out to and be available to customers around the world,
        we have worked with reputable banking and financial organizations. Our
        extensive network of financial institutions, which spans the entire
        globe, along with cutting-edge technology, ensures that the money
        reaches the beneficiary&apos;s bank account quickly and securely.
      </Typography>
    </Card>
  );
};

export default ServicesCard;
