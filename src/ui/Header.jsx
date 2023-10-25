import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const Head = styled.header`
  padding: 15px 40px;
  background: var(--color-gray-0);
  display: flex;
  align-items: center;
  gap: 2.5rem;
  justify-content: flex-end;
  
`;

export default function Header() {
  return (
    <Head>
      <UserAvatar/>
      <HeaderMenu />
    </Head>
  );
}
