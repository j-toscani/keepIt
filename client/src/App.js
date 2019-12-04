import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import colorTheme from "./themes/colorTheme";
import darkTheme from "./themes/darkTheme";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template: 80px 1fr / 1fr;
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
        <header style={{ border: "1pt black solid" }} black>
          I am a header
        </header>
        <main>
          <h1>I am a h1 in a Main</h1>
          <button onClick={toggleTheme}> Click to change colors</button>
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
