import { InfoCardData } from "infoData";
import { Cell, Content, InfoCardWrawpper, Row, Title } from "./styled";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  data: InfoCardData[][];
}

export default function InfoPDF({ title, data }: InfoCardProps) {
  return (
    <InfoCardWrawpper>
      <Title>{title}</Title>
      <Content>
        {data.map((row, index) => (
          <Row key={index}>
            {row.map((child, i) => (
              <Cell key={i} col={row.length}>
                <Image src={child.label} alt="" width={60} height={60} />
              </Cell>
            ))}
          </Row>
        ))}
      </Content>
    </InfoCardWrawpper>
  );
}
