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
import Image, { StaticImageData } from "next/image";
import React, { useState, ChangeEvent } from "react";
import India from "../assets/Property 1=India.png";
import dropdown from "../assets/SmallArrow Buttom 16 px.png";
import { CURRENCY_DATA, CurrencyDataProps } from "@/data/currencyData";
import CurrencySearch from "./CurrencySearch";
import AED from "../assets/Component 81.png";

const CurrencyExchanger: React.FC<CurrencyDataProps> = ({
  flagSvg,
  currency,
  code,
  symbol
}) => {
  const [givenValue, setGivenValue] = useState<number>(0);
  const [receivedValue, setReceivedValue] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<{
    flagSvg: StaticImageData;
    currency: string;
    code: string;
    rate: number;
    symbol: string;
  } | null>({
    flagSvg: India,
    currency: "Indian Rupee",
    code: "INR",
    rate: 22.63,
    symbol: "₹"
  })

  const handleGivenChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d]/g, "").slice(0, 11);
    const givenNumber = parseFloat(inputValue);
  
    if (!isNaN(givenNumber) && isFinite(givenNumber)) {
      setGivenValue(givenNumber);
      if (selectedCurrency) {
        const newReceivedValue = parseFloat((givenNumber * selectedCurrency.rate).toFixed(2));
        setReceivedValue(newReceivedValue);
      } else {
        setReceivedValue(0);
      }
    } else {
        setGivenValue(0);
        setReceivedValue(0);
    }
  };
  
  

  const handleReceivedChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d]/g, "").slice(0, 11);
    const receivedNumber = parseFloat(inputValue);
    if (!isNaN(receivedNumber) && isFinite(receivedNumber)) {
        setReceivedValue(receivedNumber);

        if (selectedCurrency) {
            const newGivenValue = parseFloat((receivedNumber * (1 / selectedCurrency.rate)).toFixed(2)) || 0;
            setGivenValue(newGivenValue);
          } else {
            setGivenValue(0);
          }
        } else {
          setReceivedValue(0);
          setGivenValue(0);
        }
      };

  const currencyData = CURRENCY_DATA;

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const handleClickOutside = () => {
    setToggle(false);
  };

  console.log(selectedCurrency, "second")

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
          width: "375px",
          overflow: "visible",
        }}
      >
        <Box>
          <Box>
            <Card
              sx={{
                padding: "6px 8px 6px 8px",
                borderRadius: "12px",
                margin: "16px 0",
                boxShadow: "none",
                position: "relative",
                zIndex: "2",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontSize: "12px", color: "#687082" }}
              >
                You give
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "4px 6px 4px 6px",
                    "&:hover": {
                      borderRadius: "8px",
                      backgroundColor: "#e0e0e0cc",
                    },
                  }}
                >
                  <Image
                    src={AED}
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
                  onChange={(e) => handleGivenChange(e)}
                  value={givenValue}
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
                    right: "0",
                    left: "0",
                    zIndex: 10,
                  }}
                >
                  <CurrencySearch currencyData={currencyData} setSelectedCurrency={setSelectedCurrency} setToggle={setToggle} />
                </Box>
              ) : null}
              <Card
                sx={{
                  padding: "6px 8px 6px 8px",
                  borderRadius: "12px",
                  margin: "16px 0",
                  boxShadow: "none",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "12px", color: "#687082" }}
                >
                  To be received
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 6px 4px 6px",
                      "&:hover": {
                        borderRadius: "8px",
                        backgroundColor: "#e0e0e0cc",
                      },
                      cursor: "pointer",
                    }}
                    onClick={toggleHandler}
                  >
                    <Image
                      src={selectedCurrency ? selectedCurrency.flagSvg.src : India}
                      alt="India"
                      width={24}
                      height={24}
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
                      {selectedCurrency ? selectedCurrency.code : "INR"}
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
                    onChange={(e) => handleReceivedChange(e)}
                    value={receivedValue}
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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
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
              <Typography sx={{fontSize: "16px", fontWeight: "500", color: "#09181A", lineHeight: "20.08px"}}>
                AED 1 = {selectedCurrency ? selectedCurrency.symbol : "₹" } {selectedCurrency ? selectedCurrency.rate : 22.63}
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
