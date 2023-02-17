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
    <div style={{width:"100%", position:"absolute", bottom:"0px",}}>
      <div style={{margin:"0px 50px", borderTop:"1px solid #dbdfe1", padding:"16px 0 40px 0"}}>
        <table style={{width:"100%"}}>
          <Tbody>
            <Tr>
              <Td style={{color:"#636566"}}>
                Tầng 11, Toà nhà Diamond Plaza, 34 Lê Duẩn, Phường Bến Nghé,
                Quận 1, TP.HCM, Việt Nam
              </Td>
              <Td style={{color:"#636566", width:"10%"}}>Telephone</Td>
              <Td style={{color:"#636566", width:"10%"}}>(28) 6256 3688</Td>
            </Tr>
            <Tr>
              <Td style={{color:"#636566"}}>fwd.com.vn</Td>
              <Td style={{color:"#636566", width:"10%"}}>Hotline</Td>
              <Td style={{color:"#636566", width:"10%"}}>1800 96 96 90</Td>
            </Tr>
          </Tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
