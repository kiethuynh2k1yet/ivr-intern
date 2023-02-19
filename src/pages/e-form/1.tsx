import Form1 from "e-form/components/form-1";
import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import {
  fatca,
  infoData,
  documentData,
  jobData,
  contactData,
  policyData,
} from "infoData";

const EForm1 = () => {
  
  return (
    <Form1
      infoData={infoData}
      fatca={fatca}
      documentData={documentData}
      policyData={policyData}
      jobData={jobData}
      contactData={contactData}
    />
  );
};

export default EForm1;
