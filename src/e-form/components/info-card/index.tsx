import { InfoCardData } from "infoData";
import { Cell, Content, InfoCardWrawpper, Row, Title } from "./styled";

interface InfoCardProps {
  title: string;
  data: InfoCardData[][];
}

export default function InfoCard({ title, data }: InfoCardProps) {
  return (
    <InfoCardWrawpper>
      <Title>{title}</Title>
      <Content>
        {data.map((row, index) => (
          <Row key={index}>
            {row.map((child, i) => (
              <Cell key={i} col={row.length}>
                <label>{child.label}</label>
                <h6>{child.value}</h6>
              </Cell>
            ))}
          </Row>
        ))}
      </Content>
    </InfoCardWrawpper>
  );
}
