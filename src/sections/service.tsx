import { Box, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import currencies from "../assets/currencies.svg";
import payment from "../assets/srvs-ns.svg";
import flags from "../assets/flag.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Service = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        borderRadius: "40px",
        top: "-50px",
        zIndex: "20",
        position: "relative",
        background: "white",
      }}
    >
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
                height: "548px",
                position: "relative",
                boxShadow: "none",
              }}
            >
              <Box sx={{}}>
                <Box sx={{ padding: "24px", zIndex: "10" }}>
                  <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
                    Remittances
                  </Typography>
                  <Typography sx={{ fontSize: "16px", color: "#1d4957" }}>
                    The easiest way to send money to bank account, e-wallet and
                    even cash pay-out through various bank and partner
                    locations.
                  </Typography>
                </Box>
                <Image
                  src={flags}
                  alt="flags"
                  height={400}
                  width={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                    position: "absolute",
                    bottom: "0px",
                  }}
                />
              </Box>
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
                height: "548px",
                boxShadow: "none",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Image
                  src={currencies}
                  alt="currencies"
                  width={300}
                  height={300}
                  style={{
                    width: "70%",
                    height: "auto",
                    objectFit: "contain",
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                  }}
                />
              </Box>
              <Box sx={{ padding: "24px", zIndex: "10" }}>
                <Typography sx={{ fontSize: "32px", fontWeight: "700" }}>
                  Currency <br /> Exchange
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  Choose UNIMONI for your currency exchange and discover the
                  unique combination of exceptional service and the most
                  favorable rates that make us the best choice.
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
            boxShadow: "none",
            position: "relative",
            height: "200px",
          }}
        >
          <Box sx={{ marginRight: "24px", zIndex: "10" }}>
            <Typography
              sx={{ fontSize: "32px", fontWeight: "700", color: "#1d4957" }}
            >
              Easy payments
            </Typography>
            <Typography sx={{ fontSize: "16px", width: "550px" }}>
              Our services make it easy to recharge your loved ones phones
              globally and manage your bill payments with convenience and ease.
            </Typography>
          </Box>
          <Image
            src={payment}
            alt="payment"
            width={800}
            height={800}
            style={{ width: "500px", position: "absolute", right: "-40px" }}
          />
        </Card>
      </MaxWidthWrapper>
    </Box>
  );
};

export default Service;
