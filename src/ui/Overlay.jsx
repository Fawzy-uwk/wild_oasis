import styled from "styled-components";

const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* Black background with opacity */
  /* From https://css.glass */
  background: rgba(217, 245, 255, 0.29);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
  border: 1px solid rgba(217, 245, 255, 0.28);
  z-index: 4000;
`;
export default OverLay;
