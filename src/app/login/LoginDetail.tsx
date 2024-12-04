"use client";
import CustomInputFields from "@/commonComponent/customInputFields";
import { Box, SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { ChangeEvent, FC } from "react";

type LoginDetailProps = {
  onChangeHandler: (
    event: ChangeEvent<any> | SelectChangeEvent,
    sectionName?: string
  ) => void;
};
const LoginDetail: FC<LoginDetailProps> = (props) => {
  const { onChangeHandler } = props;
  return (
    <Box sx={{ flexDirection: "column" }}>
      {/* <Grid container spacing={2}>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}> */}
      <CustomInputFields
        type="textfield"
        label="Login ID"
        name={"id"}
        onChange={(e) => onChangeHandler(e)}
      />
      {/* </Grid>
        <Grid size={4}> */}
      <CustomInputFields
        type="textfield"
        label="Password"
        name={"password"}
        onChange={(e) => onChangeHandler(e)}
        sx={{ mt: 1 }}
      />
      {/* </Grid>
      </Grid> */}
    </Box>
  );
};

export default LoginDetail;
