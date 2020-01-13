/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Fragment, useState, useEffect } from "react";

import Top from "./components/Top";
import Form from "./components/Form";
import OutputTest from "./components/OutputTest";
import GridContainer from "./components/appContainer/GridContainer";
import MainContainer from "./components/appContainer/MainContainer";
import GlobalStyles from "./GlobalStyles";

import { fetchList } from "./api/notes";
import colorTheme from "./themes/colorTheme";
import darkTheme from "./themes/darkTheme";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [data, setData] = useState(null);

  function toggleTheme() {
    setDarkmode(!darkmode);
  }

  useEffect(() => {
    fetchList("/notes").then(
      response => setData(response),
      () => {
        setData(["waiting for Data"]);
        console.log("something went wrong");
      }
    );
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <GridContainer>
        <Top handleClick={toggleTheme} darkmode={darkmode} />
        <MainContainer
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
        </MainContainer>
      </GridContainer>
    </Fragment>
  );
}

export default App;
