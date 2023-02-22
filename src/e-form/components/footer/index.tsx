import React from "react";
import {
  FooterWapper,
  FooterTable,
  FooterContainer,
  Tbody,
  Tr,
  Td,
} from "./styled";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <FooterContainer>
      <FooterWapper>
        <FooterTable>
          <Tbody>
            <Tr>
              <Td>
                Tầng 11, Toà nhà Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé,
                Quận 1, TP.HCM, Việt Nam
              </Td>
              <Td>Telephone</Td>
              <Td>(28) 6256 3688</Td>
            </Tr>
            <Tr>
              <Td>fwd.com.vn</Td>
              <Td>Hotline</Td>
              <Td>1800 96 96 90</Td>
            </Tr>
          </Tbody>
        </FooterTable>
      </FooterWapper>
    </FooterContainer>
  );
};

export default Footer;
