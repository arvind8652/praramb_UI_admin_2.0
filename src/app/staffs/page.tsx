"use client";
import CustomButton from "@/commonComponent/customButton";
import CustomDivider from "@/commonComponent/customDivider";
import { Box } from "@mui/material";
import React, { useState } from "react";
import StaffDetail from "./StaffDetail";
import { postRequest } from "../_lib/apiService";
import { useGetRecoilData } from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";

const initialData = {
  name: "",
  age: "",
  certification: "",
  type: "",
  photo: "",
  address: "",
  charges: "",
};

const Staff = () => {
  const brandDetail = useGetRecoilData(AtomsName.BRANDDETAIL);
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

  const formSubmit = async () => {
    try {
      const reqData = {
        ...formData,
        ["brandId"]: brandDetail?._id,
        ["age"]: parseInt(formData.age),
        ["charges"]: parseFloat(formData.charges),
      };
      const res = await postRequest("staff/addStaff", reqData);
      if (res.data) {
        setFormData(initialData);
      }
    } catch (error) {
      console.log("getting error----------", error);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    formSubmit();
  };
  return (
    <Box>
      <CustomDivider textAlign="left" label="Staff Detail" />
      <StaffDetail onChangeHandler={onChangeHandler} />

      <CustomButton sx={{ mt: 1 }} data={"Submit"} onClick={handleSubmit} />
    </Box>
  );
};

export default Staff;
