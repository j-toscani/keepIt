import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import colorTheme from "./themes/colorTheme";
import darkTheme from "./themes/darkTheme";
import Top from "./components/Top";
import Form from "./components/Form";

const Container = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: 80px 1fr / 1fr;
`;

const Main = styled.main`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  flex-wrap: wrap;
`;

function App() {
  const [darkmode, setDarkmode] = React.useState(false);

  function toggleTheme() {
    setDarkmode(!darkmode);
  }

  return (
    <ThemeProvider theme={darkmode ? darkTheme : colorTheme}>
      <Container>
        <GlobalStyles />
        <Top handleClick={toggleTheme} darkmode={darkmode} />
        <Main>
          <Form />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
