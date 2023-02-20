import Header from "../header";
import React from "react";

interface LayoutEarkProps {
  children: React.ReactNode;
}

const LayoutEarks = ({ children }: LayoutEarkProps) => {
  return (
    <>
        <Header/>
        {children}
        {/* <Receive/> */}
    </>
  );
};

export default LayoutEarks;