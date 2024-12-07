import CustomInputFields from "@/commonComponent/customInputFields";
import { Box, SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { ChangeEvent, FC } from "react";

type RegistrationDetailProps = {
  onChangeHandler: (
    event: ChangeEvent<any> | SelectChangeEvent,
    sectionName: string,
    fieldName?: string
  ) => void;
};

const RegistrationDetail: FC<RegistrationDetailProps> = (props) => {
  const { onChangeHandler } = props;
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={4}>
          <CustomInputFields
            type="textfield"
            label="registration date"
            name={"registrationDate"}
            disabled
            onChange={(e) =>
              onChangeHandler(e, "registrationDetail", "registrationDate")
            }
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="date"
            label="start date"
            name={"startDate"}
            onChange={(e) =>
              onChangeHandler(e, "registrationDetail", "startDate")
            }
          />
        </Grid>
        <Grid size={4}>
          <CustomInputFields
            type="date"
            label="end date"
            name={"endDate"}
            onChange={(e) =>
              onChangeHandler(e, "registrationDetail", "endDate")
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationDetail;
