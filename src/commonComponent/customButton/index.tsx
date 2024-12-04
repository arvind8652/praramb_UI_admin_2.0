import { Button } from "@mui/material";
import { FC } from "react";

type CustomButtonProps = {
  data: any;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  sx?: object;
  [x: string]: any;
};
const CustomButton: FC<CustomButtonProps> = (props) => {
  const {
    data,
    variant = "contained",
    size = "small",
    sx = {},
    ...rest
  } = props;

  return (
    <>
      <Button
        size={size}
        variant={variant}
        sx={{
          borderRadius: "10px",
          ...sx,
        }}
        {...rest}
      >
        {data}
      </Button>
    </>
  );
};

export default CustomButton;
