import React from "react";
import { HeaderWrapper } from "./styled";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <HeaderWrapper>
      <h1>HEADER</h1>
    </HeaderWrapper>
  );
};

export default Header;
