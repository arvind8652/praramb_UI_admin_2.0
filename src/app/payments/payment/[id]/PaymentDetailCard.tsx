import CustomText from "@/commonComponent/customText";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const PaymentDetailCard = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}>
          <CustomText data="Payment Detail" variant="subtitle1" />
          <CustomText data="Payment ID" variant="caption" />
        </Grid>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}>
          <CustomText data="Payment Detail" variant="subtitle1" />
          <CustomText data="Payment ID" variant="caption" />
        </Grid>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}>
          <CustomText data="Payment Detail" variant="subtitle1" />
          <CustomText data="Payment ID" variant="caption" />
        </Grid>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}>
          <CustomText data="Payment Detail" variant="subtitle1" />
          <CustomText data="Payment ID" variant="caption" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentDetailCard;
