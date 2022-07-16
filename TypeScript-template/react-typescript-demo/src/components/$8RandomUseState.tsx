import { useState } from 'react'

type AuthUser = {
    name : string
    email : string
}

function RandomUseState() {
    const [Auth, setAuth] = useState<AuthUser | null>(null)
    const [loggedIn, setloggedIn] = useState(false)

    const handleLogIn = ()=>{
        setloggedIn(true)
        setAuth({
            name: 'vishal',
            email : 'vishalkumar@example.com'
        })
    }
    const handleLogOut = ()=>{
        setloggedIn(false)
        setAuth(null)
    }
  return (
    <div>
        <button onClick={handleLogIn}>Log In 🙄</button>
        <button onClick={handleLogOut}>Log Out 😋</button>
        { loggedIn ?   `welcome ${Auth?.name}, email ${Auth?.email}` : `welcome guest`}
    </div>
  )
}

export default RandomUseState