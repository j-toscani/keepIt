import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Top from "./components/Top";
import GridContainer from "./components/appContainer/GridContainer";
import MainContainer from "./components/appContainer/MainContainer";
import GlobalStyles from "./GlobalStyles";
import AddNote from "./pages/AddNote";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import Welcome from "./pages/Welcome";

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
          <Router>
            <Top handleClick={toggleTheme} darkmode={darkmode} />
            <MainContainer>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/addnote">
                  <AddNote />
                </Route>
                <Route path="/notes">
                  <Notes />
                </Route>
                <Route path="/home">
                  <Welcome />
                </Route>
              </Switch>
            </MainContainer>
          </Router>
        </GridContainer>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
