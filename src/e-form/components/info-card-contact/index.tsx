import { Container, Row, Cell, Title } from "./styled";
import { InfoListDataUser } from "pages/utils/infoListData";

interface InfoContactProps {
  title: string;
  data: InfoListDataUser[][];
}

const InfoCardContact = ({ title, data }: InfoContactProps) => {
  return (
    <Container>
      <Title>{title}</Title>
        {data && data.map((row, index) => (
          <Row key={index}>
            {row.map((cell, i) => (
              <Cell key={i} col={row.length}>
                <>
                  <label>{cell.label}</label>
                  <h6>{cell.value}</h6>
                </>
              </Cell>
            ))}
          </Row>
        ))}
    </Container>
  );
};

export default InfoCardContact;
