import React, { Fragment, useState, useEffect } from "react";

import Top from "./components/Top";
import Form from "./components/Form";
import OutputTest from "./components/OutputTest";
import GridContainer from "./components/appContainer/GridContainer";
import MainContainer from "./components/appContainer/MainContainer";
import GlobalStyles from "./GlobalStyles";

import { fetchList } from "./api/notes";
import ThemeProvider from "./themes/ThemeContext";

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
        //on reject
        const notification = "No Data recieved...";
        setData(notification);
        alert(notification);
      }
    );
  }, []);

  return (
    <Fragment>
      <ThemeProvider>
        <GlobalStyles />
        <GridContainer>
          <Top handleClick={toggleTheme} darkmode={darkmode} />
          <MainContainer>
            <Form />
            <OutputTest setData={setData} data={data} />
          </MainContainer>
        </GridContainer>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
