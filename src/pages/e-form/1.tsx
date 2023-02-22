import Form1 from "e-form/components/form-1";
import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import {
  infoData,
  fatca,
  documentData,
  policyData,
  jobData,
  contactData,
} from "pages/utils/infoData";

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
