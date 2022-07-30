import { useContext } from "react";
import { ThemeContext } from "./$12UseContextThemeProvider";

function UseContextThemeConsumer() {
  const theme = useContext(ThemeContext);
  return <div style={{background: theme.primary.color,color: theme.primary.background}}>UseContextThemeConsumer</div>;
}

export default UseContextThemeConsumer;
