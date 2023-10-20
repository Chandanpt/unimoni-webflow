import React from "react";
import { Card, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import { BranchDataTypes } from "@/data/branchData";

const BranchCard: React.FC<BranchDataTypes> = ({id, title, address, contact}) => {

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#09181a",
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "24px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#09181a",
              fontWeight: "400",
              lineHeight: "24px",
              marginBottom: "12px",
            }}
          >
            {address}
          </Typography>
          {contact.map((item: string) => (
            <Typography
              sx={{
                color: "#09181a",
                fontWeight: "400",
                lineHeight: "24px",
                marginBottom: "12px",
              }}
              key={id}
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
            marginTop: "24px",
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "700" }}>
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
