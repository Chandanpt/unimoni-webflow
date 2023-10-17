import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import BranchCard from "@/components/branchCard";
import { BRANCH_DATA } from "@/data/branchData";

const Branches = () => {
  const data = BRANCH_DATA;

  return (
    <Box
      sx={{
        width: "100%",
        padding: "110px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1500px", padding: "0 100px" }}>
        <Typography
          sx={{
            color: "#09181a",
            fontSize: "44px",
            fontWeight: "900",
            textAlign: "left",
            width: "100%",
            marginBottom: "70px",
          }}
        >
          Branch Locator
        </Typography>
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
      </Box>
    </Box>
  );
};

export default Branches;
