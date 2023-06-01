import React, { useState, useContext } from 'react'
import AlertContext from './alertContext'

export const useAlert = () => useContext(AlertContext);

export const AlertState = (props) => {
    const [alert, setAlert] = useState(null)

    const showAlert = async (message, type) => {
        console.log(message, type, 'in alertState')
        await setAlert({
            msg: message,
            type,
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    return (
        <AlertContext.Provider value={{ alert, showAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}