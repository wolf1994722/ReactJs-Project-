import { useState } from 'react';
import { createContext } from 'react';

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [dark, setDark] =  useState(false);

  return (
    <DarkModeContext.Provider value={[dark, setDark]}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider };
export default DarkModeContext;