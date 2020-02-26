import React, { Fragment } from "react";
import { configure, addDecorator } from "@storybook/react";
import ThemeProvider from "../src/themes/ThemeContext";
import GlobalStyles from "../src/GlobalStyles";

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module);

// add GlobalStyle for every story
const GlobalStyleDecorator = storyFn => (
  <Fragment>
    <ThemeProvider>
      <main>
        <GlobalStyles />

        {storyFn()}
      </main>
    </ThemeProvider>
  </Fragment>
);
addDecorator(GlobalStyleDecorator);
