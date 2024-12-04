import React, { ChangeEvent } from "react";
import {
  TextField,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface CustomInputFieldsProps {
  type: "textfield" | "select" | "radio" | "checkbox" | "date";
  label?: string;
  value?: any;
  options?: { label: string; value: any }[]; // for select or radio
  onChange?: (event: ChangeEvent<any> | SelectChangeEvent) => void;
  [x: string]: any; // other MUI-specific props
}

const CustomInputFields: React.FC<CustomInputFieldsProps> = ({
  type,
  label,
  value,
  options,
  onChange,
  ...rest
}) => {
  switch (type) {
    case "textfield":
      return (
        <TextField
          label={label}
          value={value}
          size={rest.size || "small"}
          variant={rest.variant || "outlined"}
          fullWidth={rest.fullWidth || true}
          onChange={onChange}
          {...rest}
        />
      );
    case "select":
      return (
        <FormControl
          fullWidth={rest.fullWidth || true}
          size={rest.size || "medium"}
          variant={rest.variant || "outlined"}
        >
          <InputLabel>{label}</InputLabel>
          <Select
            value={value}
            onChange={onChange as (event: SelectChangeEvent) => void} // cast onChange to SelectChangeEvent handler
            {...rest}
          >
            {options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case "radio":
      return (
        <FormControl component="fieldset">
          <RadioGroup value={value} onChange={onChange} {...rest}>
            {options?.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case "checkbox":
      return (
        <FormControlLabel
          control={<Checkbox checked={value} onChange={onChange} {...rest} />}
          label={label}
        />
      );
    case "date":
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label={label}
              format="DD-MM-YYYY"
              value={value}
              onChange={onChange}
              slots={{ textField: TextField }}
              slotProps={{
                textField: {
                  size: "small",
                  fullWidth: true,
                  sx: {
                    "& .MuiInputLabel-root": {
                      mt: -1, // Moves the label text upward
                    },
                    "& .MuiOutlinedInput-root": {
                      mt: -1,
                      // borderRadius: "10px", // Set border radius for outlined input
                    },
                  },
                },
              }}
              {...rest}
            />
          </DemoContainer>
        </LocalizationProvider>
      );
    default:
      return null;
  }
};

export default CustomInputFields;
