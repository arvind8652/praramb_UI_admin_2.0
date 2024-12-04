"use client";
import CustomButton from "@/commonComponent/customButton";
import CustomDivider from "@/commonComponent/customDivider";
import { Box } from "@mui/material";
import React, { FC, useState } from "react";

import { useRouter } from "next/navigation";
import LoginDetail from "./LoginDetail";
import { postRequest } from "../_lib/apiService";
import { useSetRecoilData } from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";

const initialData = {
  id: "",
  password: "",
};

type LoginProps = {
  onLogin: any;
};
const Login: FC<LoginProps> = ({ onLogin }) => {
  const router = useRouter();
  const setBrandDetailRecoilData = useSetRecoilData(AtomsName.BRANDDETAIL);
  const [formData, setFormData] = useState(initialData);
  const onChangeHandler = (e: any, sectionName?: string): void => {
    let oldFormData: any = { ...formData };
    if (sectionName) {
      oldFormData[sectionName][e.target.name] = e.target.value;
    } else {
      oldFormData[e.target.name] = e.target.value;
    }
    setFormData(oldFormData);
  };

  type callLoginApiType = {
    id: string;
    password: string;
  };
  const callLoginApi = async (data: callLoginApiType) => {
    try {
      const req = { id: data.id, password: data.password };
      const resp = await postRequest("/login", req);
      if (resp.data) {
        setBrandDetailRecoilData(resp.data);
        onLogin();
      }
    } catch (error) {
      console.log("error---------", error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    callLoginApi(formData);
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <LoginDetail onChangeHandler={onChangeHandler} />

      <CustomButton sx={{ mt: 1 }} data={"Submit"} onClick={handleSubmit} />
    </Box>
  );
};

export default Login;
