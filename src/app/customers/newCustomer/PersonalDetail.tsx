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
};
const PersonalDetail: FC<PersonalDetailProps> = (props) => {
  const { onChangeHandler } = props;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}>
          <CustomInputFields
            type="textfield"
            label="name"
            name={"name"}
            onChange={(e) => onChangeHandler(e, "personlDetail")}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="age"
            name={"age"}
            onChange={(e) => onChangeHandler(e, "personlDetail")}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="gender"
            name={"gender"}
            onChange={(e) => onChangeHandler(e, "personlDetail")}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="mobile"
            name={"mobile"}
            onChange={(e) => onChangeHandler(e, "personlDetail")}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="email"
            name={"email"}
            onChange={(e) => onChangeHandler(e, "personlDetail")}
          />
        </Grid>
        <Grid size={2}>
          <CustomInputFields
            type="textfield"
            label="weight"
            name={"weight"}
            onChange={(e) => onChangeHandler(e, "personlDetail")}
          />
        </Grid>
        <Grid size={2}>
          <CustomInputFields
            type="textfield"
            label="height"
            name={"height"}
            onChange={(e) => onChangeHandler(e, "personlDetail")}
          />
        </Grid>

        <Grid size={12}>
          <CustomInputFields
            type="textfield"
            label="address"
            name={"address"}
            onChange={(e) => onChangeHandler(e, "personlDetail")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetail;
