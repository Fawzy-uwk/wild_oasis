import styled from "styled-components";
import Label from "./Label";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  /* display: flex;
  flex-direction: column;

  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px; */

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-100);
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
/* eslint-disable react/prop-types*/
function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}
export default FormRow;
