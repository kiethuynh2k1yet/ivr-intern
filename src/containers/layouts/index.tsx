import Footer from "e-form/components/footer";
import Form7 from "e-form/components/form-7";
import Form71 from "e-form/components/form-7-1";

import Header from "e-form/components/header";
import Tosign from "e-form/components/tosign";
import { usePathname } from "next/navigation";
import React from "react";

interface LayoutsProps {
  children: React.ReactNode;
  logo?: string;
  path?: string;
}

const Layouts = ({ children, logo, path }: LayoutsProps) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          width: 1190,
          height: "auto",
          backgroundColor: "white",
          margin: "auto",
          position: "relative",
        }}
      >
        <Header logo={logo} />
        {children}

        {path ?? <Tosign />}
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
