import { Box } from "@mui/material";
import style from "./index.module.css";
import { FC, ReactNode } from "react";

type CommonPageProps = {
  children: ReactNode;
};
const CommonPage: FC<CommonPageProps> = ({ children }) => {
  return (
    <Box className={style.commonPage}>
      <Box sx={{ p: 1 }}>{children}</Box>
    </Box>
  );
};

export default CommonPage;
