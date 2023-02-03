import styled from "styled-components";

interface FieldSetProp {
  readonly active: boolean;
  readonly error: string | boolean;
}

export const FieldSet = styled.fieldset<FieldSetProp>`
  padding: 0;
  margin: 0;
  border: 1px solid
    ${({ active, error, theme }) =>
      error
        ? theme.color.status.red
        : active
        ? theme.color.status.primary
        : theme.color.status.gray2};

  border-radius: 4px;
  position: relative;
  max-width: 100%;
`;
