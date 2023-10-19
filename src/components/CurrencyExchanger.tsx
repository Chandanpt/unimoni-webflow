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
import searchIcon from "../assets/Search 24 px.png";
import closeIcon from "../assets/Close 16px.png";
import India from "../assets/Property 1=India.png";
import { CURRENCY_DATA } from "@/data/currencyData";

const CurrencyExchanger = () => {
  const [value, setValue] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);

  const currencyData = CURRENCY_DATA;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d]/g, "").slice(0, 11);
    const formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setValue(formattedValue);
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <Box
      sx={{ backgroundColor: "#2166D1" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Card
        sx={{
          backgroundColor: "#F1F2F4CC",
          padding: "0 16px",
          borderRadius: "16px",
          width: "345px",
        }}
      >
        <Box>
          {toggle ? (
            <Card sx={{ borderRadius: "12px", width: "100%", height: "194px", marginTop: "16px" }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
                borderBottom="1px solid #DDE1EB"
                padding="8px"
              >
                <Box display="flex" alignItems="center" width="100%">
                  <Image
                    src={searchIcon}
                    alt="Search Icon"
                    height={24}
                    width={24}
                  />
                  <Input
                    placeholder="Currency you are converting from "
                    fullWidth
                  />
                </Box>
                <Image
                  src={closeIcon}
                  alt="Search Icon"
                  height={16}
                  width={16}
                />
              </Box>
              <Box padding="8px">
                {currencyData.map((item) => (
                  <Box display="flex" alignItems="center" key={item.country}>
                    <Image
                      src={item.flagSvg}
                      alt="India"
                      height={24}
                      width={24}
                      style={{ margin: "8px" }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          color: "#09181A",
                        }}
                      >
                        {item.country}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "#434854",
                        }}
                      >
                        {item.currencyName}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Card>
          ) : (
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
                    {/* <Image
                  src={India}
                  alt="India"
                  width={40}
                  style={{ aspectRatio: "1" }}
                /> */}
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
                        <InputAdornment position="start">
                          &#8377;
                        </InputAdornment>
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
              {/* <Card
            sx={{
              padding: "4px",
              borderRadius: "12px",
              margin: "16px 0",
              position: "relative",
              display: "flex",
              boxShadow: "none",
              zIndex: "1",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "12px", color: "#687082" }}
              >
                Exchange rate
              </Typography>
              <Typography variant="h6">&#8377;1 = $0.012 </Typography>
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "4px",
                backgroundColor: "#2166D1",
                marginX: "-2px",
                border: "none",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "4px",
                backgroundColor: "#F1F2F4CC",
                marginX: "-2px",
                border: "none",
              }}
            ></Box>
            <Button onClick={toggleHandler}>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#19468D",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%) rotate(90deg)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              </Box>
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "50%",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "12px", color: "#687082" }}
              >
                Fee
              </Typography>
              <Typography variant="h6">&#8377;50 </Typography>
            </Box>
          </Card> */}
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
                    }}
                  >
                    {/* <Image
                  src={usa}
                  alt="India"
                  width={30}
                  style={{ aspectRatio: "1" }}
                /> */}
                    <FormControl>
                      <NativeSelect
                        defaultValue="India"
                        inputProps={{
                          name: "currency",
                          id: "uncontrolled-native",
                        }}
                        style={{
                          borderBottom: "none",
                          border: "none",
                          fontWeight: "800",
                        }}
                      >
                        <option value="India">INR</option>
                        <option value="USA">USD</option>
                        <option value="England">Euro</option>
                      </NativeSelect>
                    </FormControl>
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
          )}
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
          onClick={toggleHandler}
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
