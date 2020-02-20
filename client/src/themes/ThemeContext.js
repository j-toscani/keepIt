import React, { createContext, useState } from "react";
import colorTheme from "./colorTheme";
import darkTheme from "./darkTheme";

export const ThemeContext = createContext({
  colorTheme,
  darkTheme
});

export default function ThemeProvider({ children }) {
  const [darkThemeActive, setDarkThemeActive] = useState(false);

  function toggleTheme() {
    setDarkThemeActive(!darkThemeActive);
  }

  const theme = darkThemeActive ? darkTheme : colorTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
