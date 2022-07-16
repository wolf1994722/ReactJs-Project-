import { useState } from "react";
// React.Dispatch<React.SetStateAction<boolean>>
function UseStateHook() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const handleLoggedIn = () => {
    setLoggedIn(true)
  };
  const handleLogout = () => {
    setLoggedIn(false)
  };
  return <div>
    <button onClick={handleLoggedIn}>Log In 👉</button>
    <button onClick={handleLogout}>Log out ❔</button>
    You have been  { LoggedIn ? "log in , welcome vishal" : " Welcome Guest"}

  </div>;
}

export default UseStateHook;
