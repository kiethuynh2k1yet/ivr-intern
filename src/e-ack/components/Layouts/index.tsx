import Authentication from "components/authentication";
import Header from "components/header";
import React from "react";

interface LayoutEarkProps {
  children: React.ReactNode;
}

const LayoutEarks = ({ children }: LayoutEarkProps) => {
  return (
    <>
        <Header/>
        {children}
        <Authentication/>
    </>
  );
};

export default LayoutEarks;