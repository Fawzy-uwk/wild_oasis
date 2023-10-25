import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar.jsx";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: var(--color-gray-50);
`;
const Main = styled.main`
  background-color: var(--color-gray-50);
  padding: 50px 50px;
  overflow-y: scroll;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
function AppLayout() {
  return (
    <Layout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </Layout>
  );
}

export default AppLayout;
