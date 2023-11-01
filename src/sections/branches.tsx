import React, { useState } from "react";
import { Box, Typography, Grid, useScrollTrigger, AccordionDetails, Accordion, AccordionSummary } from "@mui/material";
import BranchCard from "@/components/BranchCard";
import { BRANCH_DATA } from "@/data/branchData";
import arrow from "../assets/arrow.svg";
import Image from "next/image";

const Branches = () => {
  const [toggle, setToggle] = useState(false);
  const data = BRANCH_DATA;

  const toggleBranch = () => {
    setToggle(!toggle);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Accordion sx={{ maxWidth: "1500px", padding: "0 100px", width: "100%", border: "none", boxShadow: "none" }}>
        <AccordionSummary sx={{display:"flex"}}>
          <Typography
            sx={{
              color: "#09181a",
              fontSize: "44px",
              fontWeight: "900",
              textAlign: "left",
              width: "100%",
            }}
          >
            Branch Locator
          </Typography>
          <Image
            src={arrow}
            alt="arrow"
            width={32}
            height={50}
            style={{
              cursor: "pointer",
              rotate: toggle ? "180deg" : "",
              transition: "rotate 0.8s",
            }}
            onClick={toggleBranch}
          />
        </AccordionSummary>
        <AccordionDetails sx={{transitionDuration: "5s"}}>
          <Typography
            sx={{
              color: "#19468d",
              fontSize: "24px",
              fontWeight: "700",
              textAlign: "left",
              width: "100%",
              marginTop: "40px",
            }}
          >
            Dubai
          </Typography>
          <Grid
            container
            spacing={1}
            alignItems="stretch"
            sx={{ margin: "24px 0" }}
          >
            {data.map((item, index) => (
              <Grid
                xs={12}
                md={data.length % 2 !== 0 && index === data.length - 1 ? 12 : 6}
                key={item.id}
                display="flex"
                flexDirection="column"
                padding="12px"
              >
                <BranchCard
                  title={item.title}
                  address={item.address}
                  contact={item.contact}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Branches;
