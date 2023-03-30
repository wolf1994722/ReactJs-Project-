import { createContext } from 'react';

//! CallBack Hell
const fname = createContext()
const lname = createContext()

function CompA(params) {
    return <CompB />
}

function CompB(params) {
    return <CompC />
}

function CompC(params) {
    return (
        <>
            welcome to another C component 🔥📚
            <fname.Consumer>
                {(fvalue) => {
                    return (
                        <>
                            <lname.Consumer>
                                {(lvalue) => <p>{fvalue} {lvalue}</p>}
                            </lname.Consumer>
                        </>
                    )
                }}
            </fname.Consumer>
        </>
    )
}

function App1() {
    return (
        <>
            <fname.Provider value={'Kabir'}>
                <lname.Provider value={'Singh 🚬'}>

                    <CompA />
                </lname.Provider>
            </fname.Provider>
        </>
    );
}

export default App1;