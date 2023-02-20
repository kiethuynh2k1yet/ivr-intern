import Footer from "e-form/components/footer";
import Header from "e-form/components/header";
import InfoPersonal from "e-form/components/info-personal";
import Tosign from "e-form/components/tosign";
import React, { useState, useEffect } from "react";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    // < style={{ backgroundColor: "gray", padding: 40 }}>
      <div
        style={{
          width: 1190,
          height: 1684,
          backgroundColor: "white",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Header />
        
        {children}
        <Tosign />
        <Footer />
      </div>
    // </ div>
  );
};

export default Layouts;
