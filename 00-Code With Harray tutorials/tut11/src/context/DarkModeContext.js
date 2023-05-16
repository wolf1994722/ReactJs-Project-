import { useState } from 'react';
import { createContext } from 'react';

const DarkModeContext = createContext(null);

const DarkModeProvider = (props) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <DarkModeContext.Provider value={[theme, toggleTheme]}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider };
export default DarkModeContext;