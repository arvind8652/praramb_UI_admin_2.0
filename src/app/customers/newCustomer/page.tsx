"use client";
import CustomDivider from "@/commonComponent/customDivider";
import { Box } from "@mui/material";
import PersonalDetail from "./PersonalDetail";
import CustomButton from "@/commonComponent/customButton";
import PaymentDetail from "./PaymentDetail";
import RegistrationDetail from "./RegistrationDetail";
import { useState } from "react";
import { useGetRecoilData } from "../../_lib/stateManagement/recoilManager";
import { AtomsName } from "../../_lib/constant";
import { postRequest } from "../../_lib/apiService";
import { useRouter } from "next/navigation";

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
    registrationDate: "",
    endDate: "",
    startDate: "",
  },
  paymentDetail: {
    totalAmountToPay: "",
  },
};

export default function Users() {
  const router = useRouter();
  const brandDetail = useGetRecoilData(AtomsName.BRANDDETAIL);
  const [formData, setFormData] = useState(initialData);

  const onChangeHandler = (
    e: any,
    sectionName: string,
    fieldName?: string
  ): void => {
    let oldFormData: any = { ...formData };
    if (fieldName) {
      oldFormData[sectionName][fieldName] = e ? e : "";
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
        ["expiryDate"]: new Date(formData.registrationDetail.endDate),
        ["registrationDate"]:
          formData.registrationDetail.registrationDate || new Date(),
        ["startDate"]: new Date(formData.registrationDetail.startDate),
        ["totalAmountToPay"]: formData.paymentDetail.totalAmountToPay,
      };
      const res = await postRequest("customer/addCust", reqData);
      if (res.data) {
        setFormData(initialData);
        router.push("/customers");
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
