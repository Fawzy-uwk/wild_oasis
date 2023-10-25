import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      <Img
        src={
          isDarkMode
            ? `https://rnogxvhsaxnxhdnjykcu.supabase.co/storage/v1/object/public/Avatars/logo-dark.png`
            : `https://rnogxvhsaxnxhdnjykcu.supabase.co/storage/v1/object/public/Avatars/logo-light.png`
        }
        alt="Logo"
      />
    </StyledLogo>
  );
}

export default Logo;
