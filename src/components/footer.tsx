import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import india from "../assets/india.svg";
import qatar from "../assets/qatar.svg";
import oman from "../assets/oman.svg";
import jordan from "../assets/jordan.svg";
import kuwait from "../assets/kuwait.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#19468d",
        color: "white",
        paddingTop: "70px",
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
        <Box
          display="flex"
          justifyContent="space-between"
          marginTop="16px"
          marginBottom="20px"
        >
          <Box>
            <Typography
              fontSize="12px"
              marginBottom="8px"
              width="500px"
              lineHeight="24px"
            >
              Unimoni is a financial services company with more than a decade of
              experience in money transfer, foreign exchange, and payments.
            </Typography>
            <Typography fontSize="12px" marginBottom="6px" lineHeight="24px">
              Unimoni Exchange L.L.C.
            </Typography>
            <Typography fontSize="12px" lineHeight="24px">
              Licensed by the Central Bank of the UAE
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "24px", fontWeight: "600", lineHeight: "140%" }}
            >
              Contact us:
            </Typography>
            <Typography
              sx={{ fontSize: "12px", fontWeight: "400", lineHeight: "24px" }}
            >
              <Image
                src="https://assets-global.website-files.com/651143670a1a2d29d7810a8e/653fb42e01bb5b6114dd7e3d_phone.svg"
                alt="phone"
                width={24}
                height={24}
              />&nbsp;
              +971-4-2398727
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                src="https://assets-global.website-files.com/651143670a1a2d29d7810a8e/653fb42eca10da336ea54a0b_E-mail.svg"
                alt="phone"
                width={24}
                height={24}
              />&nbsp;
               info@ae.unimoni.com
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, .15)",
            display: "flex",
            justifyContent: "space-between",
            padding: "20px 0",
          }}
        >
          <Typography width="100%" fontSize="12px">
            Copyright © 2023 All Rights Reserved
          </Typography>
          <Box display="flex" justifyContent="flex-end" width="100%" gap="16px">
            <Typography fontSize="12px">Key facts statement</Typography>
            <Typography fontSize="12px">Terms Of Service</Typography>
            <Typography fontSize="12px">Cookie Policy</Typography>
            <Typography fontSize="12px">Privacy Policy</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, .15)",
            padding: "20px 0",
            rowGap: "14px",
            display: "grid",
          }}
        >
          <Box
            columnGap="24px"
            rowGap="24px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box columnGap="8px" display="flex" alignItems="center">
              <Image src={india} alt="India" width={24} height={17} />
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  lineHeight: "24px",
                  textDecoration: "underline",
                }}
              >
                Unimoni India
              </Typography>
            </Box>
            <Box columnGap="8px" display="flex" alignItems="center">
              <Image src={qatar} alt="India" width={24} height={17} />
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  lineHeight: "24px",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Unimoni Qatar
              </Typography>
            </Box>
            <Box columnGap="8px" display="flex" alignItems="center">
              <Image src={oman} alt="India" width={24} height={17} />
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  lineHeight: "24px",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Unimoni Oman
              </Typography>
            </Box>
          </Box>

          <Box
            columnGap="24px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            rowGap="24px"
          >
            <Box
              columnGap="8px"
              display="flex"
              alignItems="center"
              sx={{ opacity: "0.2" }}
            >
              <Image src={jordan} alt="India" width={24} height={17} />
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  lineHeight: "24px",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Unimoni Jordan (Coming soon)
              </Typography>
            </Box>
            <Box
              columnGap="8px"
              display="flex"
              alignItems="center"
              sx={{ opacity: "0.2" }}
            >
              <Image src={kuwait} alt="India" width={24} height={17} />
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: "12px",
                  lineHeight: "24px",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Unimoni Kuwait (Coming soon)
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
