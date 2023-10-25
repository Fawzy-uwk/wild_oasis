import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "modal" &&
    css`
      z-index: 5000;
      
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;

      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  ${(props) =>
    props.type == "create" &&
    css`
      position: relative;
      border-radius: 20px;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      -ms-border-radius: 20px;
      -o-border-radius: 20px;
      
      z-index: 5000;
      
      display: grid;
      grid-template-columns: 1fr 1fr;
      
      
      // Box
      /* From https://css.glass */
      

      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "login" &&
    css`
      padding: 2.4rem 4rem;
      transform: translate(0);
      display: flex;
      flex-direction: column;
      /* Box */
      background-color: var(--color-gray-0);
      border: 1px solid var(--color-gray-100);
      border-radius: var(--border-radius-md);
      background-color: var(--color-gray-100);
      gap: 2rem;
    `}

    ${(props) =>
    props.type === "register" &&
    css`
      padding: 2.4rem 4rem;
      
      /* Box */
      background-color: var(--color-gray-0);
      border: 1px solid var(--color-gray-100);
      border-radius: var(--border-radius-md);
    `}
`;

export default Form;
