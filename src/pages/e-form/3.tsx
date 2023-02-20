import React from "react";
import Form3 from "e-form/components/form-3";
import { addressData, fatca, policyData } from "infoData";
 export default function EForm3() {
  return (
    <Form3 addressData={addressData} fatca={fatca} policyData={policyData} />
  );
}
