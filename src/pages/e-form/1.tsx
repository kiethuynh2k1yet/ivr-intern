import Form1 from "e-form/components/form-1";
import Header from "e-form/components/header";
import React from "react";

interface EFormProps {}

const EForm1 = ({}: EFormProps) => {
  return (
    <Form1
      data={{
        birthPlace: "Hà Nội",
        dob: "12/12/1992",
        fullname: "Bùi Bích Diệp",
        gender: "Nữ",
        maried: "Kết hôn",
      }}
    />
  );
};

export default EForm1;
