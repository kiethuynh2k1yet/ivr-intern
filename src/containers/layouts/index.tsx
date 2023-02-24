import Footer from "e-form/components/footer";
import Header from "e-form/components/header";
import Tosign from "e-form/components/tosign";
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
          height: 1683,
          backgroundColor: "white",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header logo={logo} />
        {children}
        <Tosign />
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
