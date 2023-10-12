import React from "react";
import { Card, Typography, Box, Button } from "@mui/material";
import Image from "next/image";

const BranchCard = (props) => {
  const contact = props.contact;

  console.log(contact, "contacywee");

  return (
    <Card
      sx={{
        padding: "32px 20px",
        backgroundColor: "#fbfbfb",
        borderRadius: "16px",
        height: "100%",
        boxShadow: "none",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#09181a",
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "24px",
        }}
      >
        {props.title}
      </Typography>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "auto"}}>
      <Box>
      <Typography
        variant="subtitle1"
        sx={{
          color: "#09181a",
          fontWeight: "400",
          lineHeight: "24px",
          marginBottom: "12px",
        }}
      >
        {props.address}
      </Typography>
      {contact.map((item) => (
        <Typography
          variant="subtitle1"
          sx={{
            color: "#09181a",
            fontWeight: "400",
            lineHeight: "24px",
            marginBottom: "12px",
          }}
          key={props.id}
        >
          Phone: {item}
        </Typography>
      ))}
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#2166d1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          borderRadius: "12px",
          width: "100%",
          bottom: "0"
        }}
      >
        <Typography variant="body2" sx={{ color: "white", fontWeight: "700" }}>
          Get direction
        </Typography>
        <Image
          src="https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/651417d9a63b5ea8ab53dff9_route_white.svg"
          alt="direction"
          height={32}
          width={32}
        />
      </Button>
      </Box>
    </Card>
  );
};

export default BranchCard;
