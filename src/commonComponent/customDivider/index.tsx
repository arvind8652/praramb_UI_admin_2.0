import { Divider } from "@mui/material";
import { FC } from "react";

type CustomDividerProp = {
  variant?: "inset" | "middle" | "fullWidth";
  sx?: object;
  [x: string]: any;
  label?: string;
};

const CustomDivider: FC<CustomDividerProp> = (props) => {
  const { variant = "fullWidth", label, sx = {}, ...rest } = props;
  return (
    <>
      <Divider
        variant={variant}
        // sx={{ bgcolor: rest?.sx?.bgcolor || "red", ...sx }}
        sx={{ ...sx }}
        {...rest}
      >
        {label && label}
      </Divider>
    </>
  );
};

export default CustomDivider;
