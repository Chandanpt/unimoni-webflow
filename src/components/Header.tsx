import { Box } from "@mui/material";
import React from "react";
import logo from "../assets/ULogo-w.svg";
import Image from "next/image";
import logoAr from "../assets/Uni-ar-wh.svg";

const Header = () => {
  return (
    <Box
      sx={{
        height: "95px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1300px",
          padding: "0 100px",
          width: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Image src={logo} alt="Logo" height={55} width={244} />
        </Box>
        <Image
          src={logoAr}
          alt="logo ar"
          height={65}
          width={210}
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default Header;
