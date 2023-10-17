import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#19468d",
        color: "white",
        paddingTop: "110px",
        paddingBottom: "40px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1500px", padding: "0 100px", width: "100%" }}>
        <Image
          src="https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65117d109430d16b028a0e1f_ULogo%20w.svg"
          alt="Logo"
          width={158}
          height={36}
          style={{ display: "inline-block" }}
        />
        <Grid container spacing={2} columnGap="40px" marginBottom="40px">
          <Grid xs={12} md={9} sx={{ margin: "40px 0" }}>
            <Typography fontSize="12px">
              Unimoni is a global financial company with expertise honed over 3
              decades of dealing in money transfers, forex, payments, and credit
              solutions.
            </Typography>
          </Grid>
          <Grid xs={12} md={2} sx={{ marginTop: "24px" }}>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", lineHeight: "140%" }}
            >
              Contact us:
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
            >
              Telephone :+971-4-2398727
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
            >
              Email: info@ae.unimoni.com
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
            >
              Emirate: Dubai
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, .15)",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              alignSelf: "stretch",
              paddingTop: "40px",
            }}
          >
            <Grid xs={12} md={6} sx={{ paddingRight: "40px" }}>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
              >
                UNIMONI Exchange L.L.C.
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
              >
                Licensed by the Central Bank of the UAE
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingRight: "24px",
              }}
            >
              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
              >
                Disclosure Statement
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
              >
                AML Policy
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
              >
                Terms Of Service
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              paddingRight="16px"
            >
              <Image
                src="https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65117ef1a0d2b2b8beefbccd_instagram.svg"
                alt="insta"
                width={21}
                height={29}
              />
              <Image
                src="https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65117ef16816c21a173285f4_facebook.svg"
                alt="fb"
                width={21}
                height={29}
              />
              <Image
                src="https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65117ef1b65eb42eec021fd7_linkedin.svg"
                alt="linkedin"
                width={21}
                height={29}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
