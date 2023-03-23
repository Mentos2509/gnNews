import styled, { ThemeProvider } from "styled-components";
import Header from "components/organisms/Header/Header";
import { ThemeConfig } from "theme/ThemeConfig";
import GlobalStyle from "theme/GlobalStyle";

const ContainerStyled = styled.div`
  padding: 0 1.5rem;
`;

const MainStyled = styled.main`
  position: relative;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <GlobalStyle />
        <MainStyled>
          <Header />
          <ContainerStyled>{children}</ContainerStyled>
        </MainStyled>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
