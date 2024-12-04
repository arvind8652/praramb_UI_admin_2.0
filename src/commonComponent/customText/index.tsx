import { FC } from "react";
import { Typography } from "@mui/material";

type CustomTextProp = {
  data: any;
  [x: string]: any;
};
const CustomText: FC<CustomTextProp> = (props) => {
  const { data, ...rest } = props;
  return <Typography {...rest}>{data}</Typography>;
};

export default CustomText;
