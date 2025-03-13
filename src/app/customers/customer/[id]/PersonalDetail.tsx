"use client";
import CustomInputFields from "@/commonComponent/customInputFields";
import { Box, SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { ChangeEvent, FC } from "react";

type PersonalDetailProps = {
  onChangeHandler: (
    event: ChangeEvent<any> | SelectChangeEvent,
    sectionName: string,
    fieldName?: string
  ) => void;
  formData: {
    name: string;
    age: string;
    gender: string;
    mobile: string;
    email: string;
    weight: string;
    height: string;
    address: string;
  };
};
const PersonalDetail: FC<PersonalDetailProps> = (props) => {
  const { onChangeHandler, formData } = props;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}>
          <CustomInputFields
            type="textfield"
            label="name"
            name={"name"}
            value={formData?.name}
            onChange={(e) => onChangeHandler(e, "personalDetail")}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="age"
            name={"age"}
            value={formData?.age}
            onChange={(e) => onChangeHandler(e, "personalDetail")}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="gender"
            name={"gender"}
            value={formData?.gender}
            onChange={(e) => onChangeHandler(e, "personalDetail")}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="mobile"
            name={"mobile"}
            value={formData?.mobile}
            onChange={(e) => onChangeHandler(e, "personalDetail")}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="email"
            name={"email"}
            value={formData?.email}
            onChange={(e) => onChangeHandler(e, "personalDetail")}
          />
        </Grid>
        <Grid size={2}>
          <CustomInputFields
            type="textfield"
            label="weight"
            name={"weight"}
            value={formData?.weight}
            onChange={(e) => onChangeHandler(e, "personalDetail")}
          />
        </Grid>
        <Grid size={2}>
          <CustomInputFields
            type="textfield"
            label="height"
            name={"height"}
            value={formData?.height}
            onChange={(e) => onChangeHandler(e, "personalDetail")}
          />
        </Grid>

        <Grid size={12}>
          <CustomInputFields
            type="textfield"
            label="address"
            name={"address"}
            value={formData?.address}
            onChange={(e) => onChangeHandler(e, "personalDetail")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetail;
