import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import colorTheme from "./themes/colorTheme";
import darkTheme from "./themes/darkTheme";
import Top from "./components/Top";
import Form from "./components/Form";
import OutputTest from "./components/OutputTest";
import { fetchList } from "./api/notes";

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
  flex-direction: column;
  overflow: auto;
  flex-wrap: wrap;
`;

function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  const [data, setData] = React.useState(null);

  function toggleTheme() {
    setDarkmode(!darkmode);
  }

  React.useEffect(() => {
    fetchList("http://localhost:5000/notes").then(response =>
      setData(response)
    );
  }, []);

  return (
    <ThemeProvider theme={darkmode ? darkTheme : colorTheme}>
      <Container>
        <GlobalStyles />
        <Top handleClick={toggleTheme} darkmode={darkmode} />
        <Main>
          <Form />
          <OutputTest setData={setData} data={data} />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
