import Form2 from "e-form/components/form-2";
import React from "react";
import { addressData, fatca } from "infoData";
export default function EForm2() {
  return <Form2 addressData={addressData} fatca={fatca} />;
}
