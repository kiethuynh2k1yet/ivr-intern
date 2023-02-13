import React from "react";
import { Form1Wrapper } from "./styled";

interface Form1Props {
  data: {
    fullname: string;
    gender: string;
    maried: string;
    dob: string;
    birthPlace: string;
  };
}

const Form1 = ({ data }: Form1Props) => {
  return <Form1Wrapper>{data.fullname}</Form1Wrapper>;
};

export default Form1;
