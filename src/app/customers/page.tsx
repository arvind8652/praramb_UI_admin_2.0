"use client";
import CustomDivider from "@/commonComponent/customDivider";
import { Box } from "@mui/material";
import PersonalDetail from "./PersonalDetail";
import CustomButton from "@/commonComponent/customButton";
import PaymentDetail from "./PaymentDetail";
import RegistrationDetail from "./RegistrationDetail";
import { ChangeEvent, useState } from "react";
import { useGetRecoilData } from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";
import { postRequest } from "../_lib/apiService";
import CustomerList from "./CustomerList";

const initialData = {
  personlDetail: {
    name: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    weight: "",
    height: "",
    address: "",
  },
  registrationDetail: {
    regitrationDate: "",
    startDate: "",
    endDate: "",
  },
  paymentDetail: {
    totalAmountToPay: "",
  },
};

export default function Users() {
  const brandDetail = useGetRecoilData(AtomsName.BRANDDETAIL);
  const [formData, setFormData] = useState(initialData);
  const onChangeHandler = (
    e: any,
    sectionName: string,
    fieldName?: string
  ): void => {
    console.log("check the date value---------", e);
    let oldFormData: any = { ...formData };
    if (fieldName) {
      oldFormData[sectionName][fieldName] = e ? e.format("DD-MM-YYYY") : "";
    } else {
      oldFormData[sectionName][e.target.name] = e.target.value;
    }
    setFormData(oldFormData);
  };

  const formSubmit = async () => {
    try {
      const reqData = {
        // ...formData,
        ["brandId"]: brandDetail?._id,
        ["name"]: formData.personlDetail.name,
        ["age"]: formData.personlDetail.age,
        ["gender"]: formData.personlDetail.gender,
        ["photo"]: "photo data",
        ["mobile"]: formData.personlDetail.mobile,
        ["email"]: formData.personlDetail.email,
        ["address"]: formData.personlDetail.address,
        ["weight"]: formData.personlDetail.weight,
        ["height"]: formData.personlDetail.height,
        ["registrationDate"]:
          formData.registrationDetail.regitrationDate || new Date("DD-MM-YYYY"),
        ["startDate"]: new Date(formData.registrationDetail.startDate),
        ["expiryDate"]: new Date(formData.registrationDetail.endDate),
        ["totalAmountToPay"]: formData.paymentDetail.totalAmountToPay,
      };
      const res = await postRequest("customer/addCust", reqData);
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
      <CustomerList />
      <CustomDivider />
      <CustomDivider textAlign="left" label="Personal Detail" />
      <PersonalDetail onChangeHandler={onChangeHandler} />
      <CustomDivider
        textAlign="left"
        label="Registration Detail"
        sx={{ mt: 2 }}
      />
      <RegistrationDetail onChangeHandler={onChangeHandler} />
      <CustomDivider textAlign="left" label="Payment Detail" sx={{ mt: 2 }} />
      <PaymentDetail onChangeHandler={onChangeHandler} />
      <CustomButton sx={{ mt: 1 }} data={"Submit"} onClick={handleSubmit} />
    </Box>
  );
}

// import {
//   getRequest,
//   postRequest,
//   putRequest,
//   patchRequest,
// } from "@/lib/apiService";

// const fetchData = async () => {
//   try {
//     const data = await getRequest("/api/endpoint");
//     console.log("Fetched data:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// const sendData = async () => {
//   const payload = { key: "value" };
//   try {
//     const response = await postRequest("/api/endpoint", payload);
//     console.log("Response:", response);
//   } catch (error) {
//     console.error("Error sending data:", error);
//   }
// };
