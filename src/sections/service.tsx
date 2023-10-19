import { Box, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import currencies from "../assets/currencies.svg";
import ding from "../assets/ding.svg";
import flags from "../assets/Flags.svg";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Service = () => {
  return (
    <Box sx={{ maxWidth: "100%", display: "flex", justifyContent: "center" }}>
      <MaxWidthWrapper>
        <Typography
          sx={{
            fontSize: "44px",
            fontWeight: "900",
            lineHeight: "144%",
            padding: "0 12px",
            marginBottom: "70px",
          }}
        >
          Our key services
        </Typography>
        <Grid container>
          <Grid md={6}>
            <Card
              sx={{
                borderRadius: "40px",
                backgroundColor: "#eef2ff",
                margin: "12px",
                height: "493px",
              }}
            >
              <Box sx={{ padding: "24px" }}>
                <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
                  Remittances
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "#1d4957" }}>
                  The easiest way to send money to any bank account, card,
                  e-wallet or cash pay-out
                </Typography>
              </Box>
              <Image
                src={flags}
                alt="flags"
                height={100}
                width={100}
                style={{
                  width: "100%",
                  height: "100%",
                  bottom: "60px"
                }}
              />
            </Card>
          </Grid>
          <Grid md={6}>
            <Card
              sx={{
                backgroundColor: "#bad9ff",
                borderRadius: "40px",
                margin: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "493px",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src={currencies}
                  alt="currencies"
                  width={300}
                  height={300}
                  style={{
                    maxWidth: "70%",
                    backgroundColor: "transparent",
                    position: "absolute",
                    right: "0",
                    top: "0",
                  }}
                />
              </Box>
              <Box sx={{ padding: "24px" }}>
                <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
                  Currency Exchange
                </Typography>
                <Typography sx={{ fontSize: "20px" }}>
                  We are a global marketplace for currency trading. With an
                  extensive network of financial centres across the globe, we
                  can offer competitive exchange rates and unmatched liquidity
                  in all major foreign exchange markets.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Card
          sx={{
            backgroundColor: "#d6fdf6",
            borderRadius: "40px",
            margin: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px",
          }}
        >
          <Box sx={{ marginRight: "24px" }}>
            <Typography
              sx={{ fontSize: "32px", fontWeight: "700", color: "#1d4957" }}
            >
              International mobile top-up
            </Typography>
            <Typography sx={{ fontSize: "20px" }}>
              Ding is the world&apos;s leading international mobile top-up
              platform. With Ding, you can buy mobile top-ups for your own phone
              or send a prepaid mobile recharge online to someone else. You can
              send a top-up online whether it&apos;s in app or online, and you
              can do it at any time or on any device that suits you.
            </Typography>
          </Box>
          <Image src={ding} alt="ding" width={246} height={160} />
        </Card>
      </MaxWidthWrapper>
    </Box>
  );
};

export default Service;
