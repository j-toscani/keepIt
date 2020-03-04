import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Top from "./components/Top";
import GridContainer from "./components/appContainer/GridContainer";
import MainContainer from "./components/appContainer/MainContainer";
import GlobalStyles from "./GlobalStyles";
import AddNote from "./pages/AddNote";
import Login from "./pages/Login";
import Notes from "./pages/Notes";
import Welcome from "./pages/Welcome";

import ThemeProvider from "./themes/ThemeContext";

function App() {
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(false);

  return (
    <Fragment>
      <ThemeProvider>
        <GlobalStyles />
        <GridContainer>
          <Router>
            <Route path="/">
              <Top toggleOverlay={() => setOpen(!open)} />
              <MainContainer>
                <Route exact path="/welcome">
                  <Welcome />
                </Route>
                <Switch>
                  <Route path="/auth/login">
                    <Login setToken={setToken} />
                  </Route>
                  <Route path="/addnote">
                    <AddNote token={token} />
                  </Route>
                  <Route path="/notes">
                    <Notes open={open} />
                  </Route>
                </Switch>
              </MainContainer>
            </Route>
          </Router>
        </GridContainer>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
