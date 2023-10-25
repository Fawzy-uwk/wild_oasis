import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 500;
  color:var(--color-gray-700)
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
/* eslint-disable react/prop-types*/
function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
