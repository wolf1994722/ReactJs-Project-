import { useContext } from 'react'
import { AuthUserContext } from './$13AdvanceUseContextProvider'

function AdvanceUseContextConsumer() {
  const UserContext = useContext(AuthUserContext)
  const handleLogin = ()=>{
    UserContext?.setUser({
      user: 'vishal',
      email: 'vishalkumar@example.com'
    })
  }
  const handleLogout = ()=>{
    UserContext?.setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login 📥</button>
      <button onClick={handleLogout}>Logout 👻</button>
      name is {UserContext?.user?.user}
      email is {UserContext?.user?.email}
    </div>
  )
}

export default AdvanceUseContextConsumer