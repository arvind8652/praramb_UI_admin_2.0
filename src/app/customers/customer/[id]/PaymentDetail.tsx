import CustomInputFields from "@/commonComponent/customInputFields";
import { Box, SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { ChangeEvent, FC } from "react";

type PaymentDetailProps = {
  onChangeHandler: (
    event: ChangeEvent<any> | SelectChangeEvent,
    sectionName: string,
    fieldName?: string
  ) => void;
  formData: {
    totalAmountToPay: string;
  };
};

const PaymentDetail: FC<PaymentDetailProps> = (props) => {
  const { onChangeHandler, formData } = props;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}>
          <CustomInputFields
            type="textfield"
            label="total amount To Pay"
            name={"totalAmountToPay"}
            value={formData?.totalAmountToPay}
            onChange={(e) => onChangeHandler(e, "paymentDetail")}
          />
        </Grid>
        <Grid size={4}></Grid>

        <Grid size={4}></Grid>
      </Grid>
    </Box>
  );
};

export default PaymentDetail;
