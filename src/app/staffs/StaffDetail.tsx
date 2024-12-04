"use client";
import CustomInputFields from "@/commonComponent/customInputFields";
import { Box, SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { ChangeEvent, FC } from "react";

type StaffDetailProps = {
  onChangeHandler: (
    event: ChangeEvent<any> | SelectChangeEvent,
    sectionName?: string
  ) => void;
};
const StaffDetail: FC<StaffDetailProps> = (props) => {
  const { onChangeHandler } = props;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={4} sx={{ gridRowEnd: "span 2" }}>
          <CustomInputFields
            type="textfield"
            label="name"
            name={"name"}
            onChange={(e) => onChangeHandler(e)}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="age"
            name={"age"}
            onChange={(e) => onChangeHandler(e)}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="certification"
            name={"certification"}
            onChange={(e) => onChangeHandler(e)}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="type"
            name={"type"}
            onChange={(e) => onChangeHandler(e)}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="photo"
            name={"photo"}
            onChange={(e) => onChangeHandler(e)}
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="charges"
            name={"charges"}
            onChange={(e) => onChangeHandler(e)}
          />
        </Grid>

        <Grid size={12}>
          <CustomInputFields
            type="textfield"
            label="address"
            name={"address"}
            onChange={(e) => onChangeHandler(e)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StaffDetail;
