import React from "react";

import Footer from "e-form/components/footer";
import Form7 from "e-form/components/form-7";
import Form71 from "e-form/components/form-7-1";

import Header from "e-form/components/header";
import Tosign from "e-form/components/tosign";
import { Container } from "./styled";

interface LayoutsProps {
  children: React.ReactNode;
  logo?: string;
  path?: string;
}

const Layouts = ({ children, logo, path }: LayoutsProps) => {
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "gray",
      }}
    >
      <Container>
        <Header logo={logo} />
        {children}

        {path ?? <Tosign />}
        {/* {router ? "" : <Tosign />} */}
        <Footer />
      </Container>
    </div>
  );
};

export default Layouts;
