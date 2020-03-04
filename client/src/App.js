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

  // useEffect(() => {
  // fetchList("http://localhost:5000/notes").then(
  // response => setData(response),
  //() => {
  //on reject
  //const notification = "No Data recieved...";
  // setData(notification);
  //alert(notification);
  //}
  // );
  // }, []);

  return (
    <Fragment>
      <ThemeProvider>
        <GlobalStyles />
        <GridContainer>
          <Router>
            <Top toggleOverlay={() => setOpen(!open)} darkmode={darkmode} />
            <MainContainer>
              <Switch>
                <Route path="/auth">
                  <Login />
                </Route>
                <Route path="/addnote">
                  <AddNote />
                </Route>
                <Route path="/notes">
                  <Notes open={open} />
                </Route>
                <Route exact path="/">
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
