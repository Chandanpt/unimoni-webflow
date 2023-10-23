import { CURRENCY_DATA, CurrencyDataProps } from "@/data/currencyData";
import { Box, Card, Input, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { ChangeEvent, useState, Dispatch } from "react";
import searchIcon from "../assets/Search 24 px.png";
import closeIcon from "../assets/Close 16px.png";

interface CurrencySearchProps {
  currencyData: CurrencyDataProps[];
  setSelectedCurrency : Dispatch<React.SetStateAction<CurrencyDataProps | null>>;
  setToggle: Dispatch<React.SetStateAction<boolean>>;
}


const CurrencySearch: React.FC<CurrencySearchProps> = ({
  setSelectedCurrency, setToggle
}) => {
  const currenciesData = CURRENCY_DATA;

  const [filterTerm, setFilterTerm] = useState<string>("");

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(event.target.value);
  };

  const filteredData = currenciesData.filter((item) =>
    item.currency.toLowerCase().includes(filterTerm.toLowerCase()) || item.code.toLowerCase().includes(filterTerm.toLowerCase())
  );

  const handleItemSelected = (item: { flagSvg: StaticImageData; currency: string; code: string }) => {
    console.log(item, "first");
    setSelectedCurrency(item);
    setToggle(false);

  };
  


  return (
    <Card
      sx={{
        borderRadius: "12px",
        width: "100%",
        height: "213px",
        zIndex: "10",
        boxShadow: "none",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        borderBottom="1px solid #DDE1EB"
        padding="8px"
      >
        <Box display="flex" alignItems="center" width="100%">
          <Image src={searchIcon} alt="Search Icon" height={24} width={24} style={{marginRight: "8px"}} />
          <Input
            placeholder="Currency you are converting from "
            fullWidth
            onChange={handleFilterChange}
            autoFocus
          />
        </Box>
        <Image src={closeIcon} alt="Search Icon" height={16} width={16} style={{cursor: "pointer"}} onClick={() => setToggle(false)}/>
      </Box>
      <Box
        padding="8px"
        maxHeight="213px"
        sx={{
          overflowY: "auto",
          position: "absolute",
          top: "50px",
          right: "0",
          left: "0",
          bottom: "0",
        }}
      >
        {filteredData.map((item) => (
          <Box
            display="flex"
            alignItems="center"
            sx={{cursor: "pointer"}}
            key={item.currency}
            onClick={() => handleItemSelected(item)}
            padding="8px"
          >
            <Image
              src={item.flagSvg}
              alt="India"
              height={24}
              width={24}
              style={{ marginRight: "8px" }}
            />
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#09181A",
                }}
              >
                {item.currency}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#434854",
                }}
              >
                {item.code}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default CurrencySearch;
