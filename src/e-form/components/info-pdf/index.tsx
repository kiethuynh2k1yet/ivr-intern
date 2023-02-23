import { InfoCardData } from "pages/utils/infoData";
import { Cell, Content, InfoCardWrawpper, Row, Title } from "./styled";

interface InfoCardProps {
  title: string;
  data: InfoCardData[][];
}

export default function InfoPDF({ title, data }: InfoCardProps) {
  return (
    <InfoCardWrawpper>
      <Title>{title}</Title>
      <Content>
        {data &&
          data.map((row, index) => (
            <Row key={index}>
              {row.map((child, i) => (
                <Cell key={i} col={row.length}>
                  <img src={child.label} alt="" />
                </Cell>
              ))}
            </Row>
          ))}
        {/* {data.map((item) =>
          item.map((item1) => ({
            ...item1,
            label: image ?? item1.label,
          }))
        )}
        ; */}
      </Content>
    </InfoCardWrawpper>
  );
}
