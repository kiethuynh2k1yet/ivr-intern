import Footer from "e-form/components/footer";
import Header from "e-form/components/header";
import Info from "e-form/components/info";
import Tosign from "e-form/components/tosign";
import React from "react";

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  return (
    <div style={{ backgroundColor: "gray", padding: 40 }}>
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
        <Info
          data={{
            fullname: "Bùi Bích Diệp",
            date: "22/01/2023",
            request: "FWD20230110R0054",
            code: "2345688",
          }}
        />
        
        {children}
        <Tosign />
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
