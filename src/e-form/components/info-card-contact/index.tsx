import { Container, Wapper, Row, Cell } from "./styled";
import { InfoListDataUser } from "pages/utils/infoListData";

interface InfoContactProps {
  title: string;
  data: InfoListDataUser[][];
}

const InfoCardContact = ({ title, data }: InfoContactProps) => {
  return (
    <Container>
      <div>{title}</div>
      <Wapper>
        {data?.map((row, index) => (
          <Row key={index}>
            {row.map((cell, i) => (
              <Cell key={i} col={row.length}>
                <>
                  <label style={{ color: "#B3B6B8" }}>{cell.label}</label>
                  <h6 style={{ color: "#B3B6B8" }}>{cell.value}</h6>
                </>
              </Cell>
            ))}
          </Row>
        ))}
      </Wapper>
    </Container>
  );
};

export default InfoCardContact;
