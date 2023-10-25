import styled from "styled-components";

const FileInput = styled.input`
  color: var(--color-gray-700);
  font-weight: 600;
  padding: 10px;
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
  border: none !important;
  width: auto;
  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    border: none;
    padding: 5px;
    border-radius: var(--border-radius-sm);
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
