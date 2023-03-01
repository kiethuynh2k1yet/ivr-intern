import { InfoCardData } from "utils/infoData";
import {
  Cell,
  Content,
  InfoCardWrawpper,
  Row,
  StyledHeading,
  Title,
} from "./styled";

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
                {child.label === "Quốc gia" && child.value === "Việt Nam" ? (
                  <>
                    <label style={{ color: "#B3B6B8" }}>{child.label}</label>
                    <StyledHeading style={{ color: "#B3B6B8" }}>
                      {child.value}
                    </StyledHeading>
                  </>
                ) : (
                  <>
                    <label dangerouslySetInnerHTML={{ __html: child.label }} />
                    <StyledHeading
                      dangerouslySetInnerHTML={{ __html: child.value }}
                    />
                  </>
                )}
              </Cell>
            ))}
          </Row>
        ))}
      </Content>
    </InfoCardWrawpper>
  );
}
