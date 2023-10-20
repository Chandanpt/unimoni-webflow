"use client";

import {
  Box,
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
  InputAdornment,
  Input,
} from "@mui/material";
import Image from "next/image";
import React, { useState, ChangeEvent } from "react";
import India from "../assets/Property 1=India.png";
import dropdown from "../assets/SmallArrow Buttom 16 px.png";
import { CURRENCY_DATA } from "@/data/currencyData";
import CurrencySearch from "./CurrencySearch";

const CurrencyExchanger = () => {
  const [value, setValue] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d]/g, "").slice(0, 11);
    const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setValue(formattedValue);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleClickOutside = () => {
    setToggle(false);
  };

  return (
    <Box
      sx={{ backgroundColor: "#2166D1" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      onClick={handleClickOutside}
    >
      <Card
        sx={{
          backgroundColor: "#F1F2F4CC",
          padding: "0 16px",
          borderRadius: "16px",
          width: "345px",
          overflow: "visible",
        }}
      >
        <Box>
          <Box>
            <Card
              sx={{
                padding: "3px 7px",
                borderRadius: "12px",
                margin: "16px 0",
                boxShadow: "none",
                //   transform: `${toggle && "translate(0px, 160px)"} `,
                //   transition: "all 0.5s ease",
                position: "relative",
                zIndex: "2",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ margin: "0 10px", fontSize: "12px", color: "#687082" }}
              >
                You give
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                margin="0 8px"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "4px",
                    "&:hover": {
                      borderRadius: "8px",
                      backgroundColor: "#e0e0e0cc",
                    },
                  }}
                >
                  <Image
                    src={India}
                    alt="India"
                    width={24}
                    style={{ aspectRatio: "1", marginRight: "4px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "900",
                      lineHeight: "22.59px",
                    }}
                  >
                    AED
                  </Typography>
                </Box>

                <TextField
                  id="standard-basic"
                  variant="standard"
                  onChange={(e) => handleChange(e)}
                  value={value}
                  inputProps={{
                    startAdornment: value ? (
                      <InputAdornment position="start">&#8377;</InputAdornment>
                    ) : undefined,
                  }}
                  sx={{
                    "&:hover": {
                      borderRadius: "8px",
                      backgroundColor: "#e0e0e0cc",
                    },
                    "& input": {
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      width: "140px",
                      textAlign: "right",
                      fontSize: "20px",
                      padding: "4px",
                      borderBottom: "none",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    },
                  }}
                />
              </Box>
            </Card>

            <Box position="relative" onClick={(e) => e.stopPropagation()}>
              {toggle ? (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    width: "313px",
                    zIndex: 10,
                    // height: "120px",
                  }}
                >
                  <CurrencySearch />
                </Box>
              ) : null}
              <Card
                sx={{
                  padding: "3px 7px",
                  borderRadius: "12px",
                  margin: "16px 0",
                  boxShadow: "none",
                  //   transform: `${toggle && "translate(0px, -160px)"} `,
                  //   transition: "all 0.5s ease",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ margin: "0 10px", fontSize: "12px", color: "#687082" }}
                >
                  To be received
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  margin="0 8px"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px",
                      "&:hover": {
                        borderRadius: "8px",
                        backgroundColor: "#e0e0e0cc",
                      },
                      cursor: "pointer",
                    }}
                    onClick={toggleHandler}
                  >
                    <Image
                      src={India}
                      alt="India"
                      width={24}
                      style={{ aspectRatio: "1", marginRight: "4px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "900",
                        lineHeight: "22.59px",
                        marginRight: "4px",
                      }}
                    >
                      AED
                    </Typography>
                    <Image
                      src={dropdown}
                      alt="dropdown"
                      height={16}
                      width={16}
                    />
                  </Box>

                  <TextField
                    id="standard-basic"
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                    value={value}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    sx={{
                      "&:hover": {
                        borderRadius: "8px",
                        backgroundColor: "#e0e0e0cc",
                      },
                      "& input": {
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        width: "140px",
                        textAlign: "right",
                        fontSize: "20px",
                        padding: "4px",
                        borderBottom: "none",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      },
                    }}
                  />
                </Box>
              </Card>
            </Box>
            <Card
              sx={{
                borderRadius: "8px",
                padding: "8px 16px",
                boxShadow: "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "15px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#687082",
                }}
              >
                Exchange rate
              </Typography>
            </Card>
          </Box>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            margin: "16px 0",
            borderRadius: "12px",
            padding: "16px, 32px, 16px, 32px",
            fontSize: "16px",
            lineHeight: "19.2px",
            height: "52px",
          }}
        >
          Find the nearest branch
        </Button>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "12px",
            color: "#505A63",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Exchange rates are dynamic. Always remember to check the appropriate
          rate in branch before carrying out your exchange
        </Typography>
      </Card>
    </Box>
  );
};

export default CurrencyExchanger;
