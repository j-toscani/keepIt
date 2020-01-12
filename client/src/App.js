import React from "react";
import Top from "./components/Top";
import Form from "./components/Form";
import OutputTest from "./components/OutputTest";
import { fetchList } from "./api/notes";
import { css } from "@emotion/core";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [darkmode, setDarkmode] = React.useState(false);
  const [data, setData] = React.useState(null);

  function toggleTheme() {
    setDarkmode(!darkmode);
  }

  React.useEffect(() => {
    fetchList("/notes").then(response => setData(response));
  }, []);

  return (
    <>
      <GlobalStyles />
      <div
        css={css`
          margin: 0;
          width: 100vw;
          height: 100vh;
          display: grid;
          grid-template: 80px 1fr / 1fr;
        `}
      >
        <Top handleClick={toggleTheme} darkmode={darkmode} />
        <main
          css={css`
            margin: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            overflow: auto;
            flex-wrap: wrap;
          `}
        >
          <Form />
          <OutputTest setData={setData} data={data} />
        </main>
      </div>
    </>
  );
}

export default App;
