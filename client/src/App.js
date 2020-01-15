import React, { Fragment, useState, useEffect } from "react";

import Top from "./components/Top";
import Form from "./components/Form";
import OutputTest from "./components/OutputTest";
import GridContainer from "./components/appContainer/GridContainer";
import MainContainer from "./components/appContainer/MainContainer";
import GlobalStyles from "./GlobalStyles";

import { fetchList } from "./api/notes";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [data, setData] = useState(null);

  function toggleTheme() {
    setDarkmode(!darkmode);
  }

  useEffect(() => {
    fetchList("http://localhost:5000/notes").then(
      response => setData(response),
      () => {
        setData(["waiting for Data"]);
      }
    );
  }, []);

  return (
    <Fragment>
      <GlobalStyles />
      <GridContainer>
        <Top handleClick={toggleTheme} darkmode={darkmode} />
        <MainContainer>
          <Form />
          <OutputTest setData={setData} data={data} />
        </MainContainer>
      </GridContainer>
    </Fragment>
  );
}

export default App;
