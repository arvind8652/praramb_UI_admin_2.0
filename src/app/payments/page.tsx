"use client";
import React, { useEffect } from "react";
import Payment from "./payment/[id]/page";
import PaymentList from "./PaymentList";
import { useRouter } from "next/navigation";
import {
  useGetRecoilData,
  useSetRecoilData,
} from "../_lib/stateManagement/recoilManager";
import { AtomsName } from "../_lib/constant";
import { postRequest } from "../_lib/apiService";

const Payments = () => {
  const router = useRouter();
  const brandDetail = useGetRecoilData(AtomsName.BRANDDETAIL);
  const setPaymentsListRecoilData = useSetRecoilData(AtomsName.PAYMENTSLIST);

  const navigateToAddCustomer = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    router.push("customers/newCustomer");
  };

  const paymentListApi = async () => {
    if (!brandDetail?._id) {
      console.error("Brand ID is missing. Cannot fetch customer list.");
      return;
    }

    try {
      const reqData = { brandId: brandDetail._id };
      console.log("Requesting Payment List with Data:", reqData);
      const res = await postRequest("payment/paymentList", reqData);

      if (res?.data) {
        console.log("Payment List Response:", res.data);
        setPaymentsListRecoilData(res.data);
      } else {
        console.error("Failed to fetch payment list. Response is empty.");
      }
    } catch (error) {
      console.error("Error fetching payment list:", error);
    }
  };

  useEffect(() => {
    console.log("Payments Component Mounted");
    if (brandDetail?._id) {
      paymentListApi();
    }
  }, [brandDetail]); // Add dependency on `brandDetail`
  return (
    <>
      <Payment />
      <PaymentList />
    </>
  );
};

export default Payments;
