import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

function TypeAssertion() {
  const [log, setLog] = useState(false);
  const [Auth, setAuth] = useState<AuthUser>({} as AuthUser);
  const handleLogIn = ()=>{
    setAuth({
        name : 'vijay singh',
        email : 'vijayyad@example.com'
    })
    setLog(true)
  }
  return <div>
    <button onClick={handleLogIn}>Log IN 🤣</button>
    { log ? `name : ${Auth.name} , email : ${Auth.email}` : 'welcome guest type asserstion {} as Auth user'}
  </div>;
} 

export default TypeAssertion;
