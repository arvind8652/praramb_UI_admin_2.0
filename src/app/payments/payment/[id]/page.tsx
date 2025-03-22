"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PaymentDetailCard from "./PaymentDetailCard";
import { getRequest } from "@/app/_lib/apiService";

const Payment = ({ params }: { params: { id?: string } }) => {
  const paymentDetailId = params?.id;
  const [formData, setFormData] = useState("");
  const fetchPaymentDetailData = async () => {
    try {
      // Fetch customer data
      const reqData = { paymentDetailId };
      const res = await getRequest(`payment/paymentDetails/${paymentDetailId}`);
      if (res.data) {
        const result = res.data;
        console.log("check result", result);
        // setFormData(formatedResult);
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };
  useEffect(() => {
    if (paymentDetailId) {
      fetchPaymentDetailData();
    }
  }, [paymentDetailId]);
  return (
    <Box>
      <PaymentDetailCard />
    </Box>
  );
};

export default Payment;
