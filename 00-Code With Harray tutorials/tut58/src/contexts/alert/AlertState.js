import React, { useState } from 'react'
import AlertContent from './alertContext'

const AlertState = (props) => {
    const [alert, setAlert] = useState(null)

    const showAlert = async (message, type) => {
        console.log(message, type, 'in alertState')
        await setAlert({
            msg: message,
            type,
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    return (
        <AlertContent.Provider value={{ alert, showAlert }}>
            {props.children}
        </AlertContent.Provider>
    )
}

export default AlertState