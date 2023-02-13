import Header from "e-form/components/header";
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
        }}
      >
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layouts;
