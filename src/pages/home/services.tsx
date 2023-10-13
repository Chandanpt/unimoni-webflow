import ServiceCard from "@/components/serviceCard";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";

const SERVICE_DATA = [
  {
    id: 1,
    imageurl:
      "https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65116636de214ecb8a545093_Bank.svg",
    title: "Bank Account Transfer",
    content:
      "Our bank transfer service enables you to send money to your beneficiary's bank account anywhere in the world in a safe and simple manner. To reach out to and be available to customers around the world, we have worked with reputable banking and financial organizations. Our extensive network of financial institutions, which spans the entire globe, along with cutting-edge technology, ensures that the money reaches the beneficiary's bank account quickly and securely.",
  },
  {
    id: 2,
    imageurl:
      "https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/651166367f6074539f860420_Exchange.svg",
    title: "Instant Money Transfer",
    content:
      "Sending money to your family and friends living in different countries can now be instant and trouble- free. Cash transfers can be done within minutes through cash payout at various agent outlets located across the globe or through account payout in select countries.",
  },
  {
    id: 3,
    imageurl:
      "https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/651166367f6074539f860420_Exchange.svg",
    title: "Currency Exchange",
    content:
      "Unimoni Exchange is the most suitable choice for currency exchange. We are actively engaged in purchasing and selling of a wide range of currencies. When you need a trusted partner to exchange currency, the Unimoni Exchange outlets makes a ideal choice. Come into any of our nearby outlets and our friendly staff will provide you the currency of your choice at the best exchange rate available.",
  },
  {
    id: 4,
    imageurl:
      "https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/651166363d4d5e24ad0a3cd4_Mobile.svg",
    title: "Mobile TopUp",
    content:
      "In a bid to cater to all your money related issues, we even extend Mobile top up facilities to our clients at all our outlets. Unimoni Exchange offers top up facilities for all major mobile network companies so that our customers can enjoy our services regardless of the mobile service they are using",
  },
  {
    id: 5,
    imageurl:
      "https://uploads-ssl.webflow.com/651143670a1a2d29d7810a8e/65116636ce4116bb3b218abb_Bill.svg",
    title: "Bill Payment",
    content:
      "To provide a convenient lifestyle to our valued customers, we offer them Bill payment services through our outlets. Our esteemed customers can benefit from long working hours of our outlets. They can walk-in to their nearest Unimoni Exchange outlet and pay for their utility bills at any time of day that they find convenient",
  },
];

const Services = () => {
  const data = SERVICE_DATA;

  return (
    <Box
      sx={{
        backgroundColor: "#19468d",
        borderRadius: "40px",
        width: "100%",
        padding: "100px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1100px", padding: "0 100px" }}>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontSize: "44px",
            fontWeight: "900",
            textAlign: "left",
            width: "100%",
            marginBottom: "70px",
          }}
        >
          Our services
        </Typography>
        <Grid container spacing={1} alignItems="stretch">
          {data.map((item, index) => (
            <Grid
              xs={12}
              md={data.length % 2 !== 0 && index === data.length - 1 ? 12 : 6}
              key={item.id}
              display="flex"
              flexDirection="column"
              padding="12px"
            >
              <ServiceCard
                imageurl={item.imageurl}
                title={item.title}
                content={item.content}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
