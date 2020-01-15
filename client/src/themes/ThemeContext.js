import { createContext, useState } from "react";
import colorTheme from "./colorTheme";
import darkTheme from "./darkTheme";

export const ThemeContext = createContext({
  colorTheme,
  darkTheme
});

export default function ThemeProvider({ children }) {
  const [darkThemeActive, setDarkThemeActive] = useState(true);

  function toggleTheme() {
    setDarkThemeActive(!darkThemeActive);
  }

  const activeTheme = darkThemeActive ? darkTheme : colorTheme;

  return (
    <ThemeContext.Provider value={{ theme: activeTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
