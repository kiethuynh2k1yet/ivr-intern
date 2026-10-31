import { InfoCardData } from "utils/infoData";
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
                <Cell key={i} $col={row.length}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={child.label} alt="" />
                </Cell>
              ))}
            </Row>
          ))}
      </Content>
    </InfoCardWrawpper>
  );
}
