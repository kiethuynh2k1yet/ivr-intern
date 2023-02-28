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
  const router = usePathname();
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "gray",
      }}
    >
      <div
        style={{
          width: "1190px",
          height: "1684px",
          backgroundColor: "white",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          flex: "1",
          justifyContent: "space-between",
        }}
      >
        <Header logo={logo} />
        {children}

        {path ?? <Tosign />}
        {/* {router ? "" : <Tosign />} */}
        <Footer />
      </div>
    </div>
  );
};

export default Layouts;
