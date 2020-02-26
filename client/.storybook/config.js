import React from "react";
import { configure, addDecorator } from "@storybook/react";
import ThemeProvider from "../src/themes/ThemeContext";
import GlobalStyles from "../src/GlobalStyles";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);

const Main = styled.div`
  margin: 10px;
`;

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <Fragment>
    <ThemeProvider>
      <Main>
        <GlobalStyles />

        {storyFn()}
      </Main>
    </ThemeProvider>
  </Fragment>
);
addDecorator(GlobalStyleDecorator);
