"use client";
import CustomDivider from "@/commonComponent/customDivider";
import { Box, SelectChangeEvent } from "@mui/material";
import PersonalDetail from "./PersonalDetail";
import CustomButton from "@/commonComponent/customButton";
import PaymentDetail from "./PaymentDetail";
import RegistrationDetail from "./RegistrationDetail";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetRecoilData } from "../../../_lib/stateManagement/recoilManager";
import { AtomsName } from "../../../_lib/constant";
import { postRequest } from "../../../_lib/apiService";
import { useRouter } from "next/navigation";
import CustomText from "@/commonComponent/customText";
import { Dayjs } from "dayjs";

const initialData = {
  personalDetail: {
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

export default function Users({ params }: { params: { id?: string } }) {
  const router = useRouter();
  const customerId = params?.id; // new for add, defined for edit
  const isEditMode = Boolean(customerId && customerId !== "new");

  const brandDetail = useGetRecoilData(AtomsName.BRANDDETAIL);
  const [formData, setFormData] = useState(initialData);

  const onChangeHandler_ = (
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

  const onChangeHandler = (
    e: ChangeEvent<any> | SelectChangeEvent,
    sectionName: string,
    fieldName?: string
  ): void => {
    let oldFormData: any = { ...formData };

    if (fieldName) {
      oldFormData[sectionName][fieldName] = e.target.value;
    } else {
      oldFormData[sectionName][e.target.name] = e.target.value;
    }

    setFormData(oldFormData);
  };

  // Separate handler for DatePicker
  const onDateChangeHandler = (
    date: Dayjs | null,
    sectionName: string,
    fieldName: string
  ) => {
    let oldFormData: any = { ...formData };
    oldFormData[sectionName][fieldName] = date ? date.format("YYYY-MM-DD") : "";
    setFormData(oldFormData);
  };

  const formSubmit = async () => {
    try {
      const reqData = {
        // ...formData,
        ["brandId"]: brandDetail?._id,
        ["name"]: formData.personalDetail.name,
        ["age"]: formData.personalDetail.age,
        ["gender"]: formData.personalDetail.gender,
        ["photo"]: "photo data",
        ["mobile"]: formData.personalDetail.mobile,
        ["email"]: formData.personalDetail.email,
        ["address"]: formData.personalDetail.address,
        ["weight"]: formData.personalDetail.weight,
        ["height"]: formData.personalDetail.height,
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

  const fetchCustomerData = async () => {
    try {
      // Fetch customer data
      const reqData = { customerId };
      const res = await postRequest("customer/customerDetail", reqData);
      if (res.data) {
        const result = res.data;
        const formatedResult = {
          personalDetail: {
            name: result.name,
            age: result.age,
            gender: result.gender,
            mobile: result.mobile,
            email: result.email,
            weight: result.weight,
            height: result.height,
            address: result.address,
          },
          registrationDetail: {
            registrationDate: result.joiningDetail.registrationDate,
            endDate: result.joiningDetail.endDate,
            startDate: result.joiningDetail.startDate,
          },
          paymentDetail: {
            totalAmountToPay: result.paymentDetail.totalAmountToPay,
          },
        };
        setFormData(formatedResult);
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };

  useEffect(() => {
    if (isEditMode) {
      // Fetch customer data for edit mode
      // Fetch customer data
      fetchCustomerData();
    }
  }, [isEditMode]);

  return (
    <Box>
      <CustomText data={isEditMode ? "Edit Customer" : "New Customer"} />
      <CustomDivider textAlign="left" label="Personal Detail" />
      <PersonalDetail
        onChangeHandler={onChangeHandler}
        formData={formData?.personalDetail}
      />
      <CustomDivider
        textAlign="left"
        label="Registration Detail"
        sx={{ mt: 2 }}
      />
      <RegistrationDetail onChangeHandler={onChangeHandler} />
      <CustomDivider textAlign="left" label="Payment Detail" sx={{ mt: 2 }} />
      <PaymentDetail
        onChangeHandler={onChangeHandler}
        formData={formData?.paymentDetail}
      />
      <CustomButton sx={{ mt: 1 }} data={"Submit"} onClick={handleSubmit} />
    </Box>
  );
}
