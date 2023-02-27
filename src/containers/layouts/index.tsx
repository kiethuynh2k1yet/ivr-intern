import Footer from "e-form/components/footer";
import Header from "e-form/components/header";
import Signature from "e-form/components/signature";
import React from "react";

interface LayoutsProps {
  children: React.ReactNode;
  logo?: string;
}

const Layouts = ({ children, logo }: LayoutsProps) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          width: 1190,
          backgroundColor: "white",
          margin: "auto",
        }}
      >
        <Header logo={logo} />
        {children}
        <Signature />
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
