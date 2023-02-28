import React from "react";
import { FooterTable, FooterContainer } from "./styled";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <FooterContainer>
      <FooterTable>
        <tbody>
          <tr>
            <td>
              Tầng 11, Toà nhà Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé, Quận
              1, TP.HCM, Việt Nam
            </td>
            <td>Telephone</td>
            <td>(28) 6256 3688</td>
          </tr>
          <tr>
            <td>fwd.com.vn</td>
            <td>Hotline</td>
            <td>1800 96 96 90</td>
          </tr>
        </tbody>
      </FooterTable>
    </FooterContainer>
  );
};

export default Footer;
