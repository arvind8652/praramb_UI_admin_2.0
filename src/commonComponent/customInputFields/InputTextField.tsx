import { Box, TextField } from "@mui/material";
import { FC } from "react";
// import style from "./index.module.css";

type InputTextFieldProps = {
  label: string;
  defaultValue?: string | null | number;
  variant?: "filled" | "standard" | "outlined";
  size?: "small" | "medium";
  id?: any;
};
const InputTextField: FC<InputTextFieldProps> = (props) => {
  const { label, variant = "outlined", size = "medium", id } = props;
  return (
    <Box>
      <TextField
        // InputProps={
        //   {
        //     classes: {
        //       root: style.inputTextField,
        //       focused: style.inputTextFieldFocused,
        //     },
        //   }
        // }
        // InputLabelProps={
        //   {
        //     classes: {
        //       focused: style.inputLabelFocused,
        //     },
        //   }
        // }
        label={label}
        id={id || "test"}
        // defaultValue="Small"
        variant={variant}
        size={size}
      />
    </Box>
  );
};

export default InputTextField;
