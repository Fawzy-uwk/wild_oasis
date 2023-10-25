import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 35px;
      padding:0;
      
      color: var(--color-indigo-700);
      text-transform: capitalize;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 25px;
      
      text-align: center;
      text-transform: capitalize;
      color: var(--color-gray-700);
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 20px;
      color: var(--color-gray-700);
      margin-bottom: 10px;
      text-transform: capitalize;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 23px;
      text-transform: capitalize;
      font-weight: 650;
      text-align: center !important;
      color: var(--color-gray-700);
      
    `}
`;
export default Heading;
