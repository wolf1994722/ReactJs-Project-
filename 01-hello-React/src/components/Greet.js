import React from "react";

export const Greet = (user) => {
    return (
        <div>
            My name is {user.name} a.k.a {user.heroName}
            <small>{user.children}</small>
        </div>
    )
}

// export default pop