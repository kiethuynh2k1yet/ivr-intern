import Authentication from "../authentication";
import Header from "../header";
import React from "react";
import Otp from "../otp";
import LinkSuccess from "../linkSuccess";
import Receive from "../receive";

interface LayoutEarkProps {
  children: React.ReactNode;
}

const LayoutEarks = ({ children }: LayoutEarkProps) => {
  return (
    <>
        <Header/>
        {children}
        <Receive/>
    </>
  );
};

export default LayoutEarks;