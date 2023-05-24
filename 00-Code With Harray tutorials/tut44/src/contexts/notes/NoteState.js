import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const s1 = {
        "name": "vishal",
        "class": "12c"
    }
    const [state, setState] = useState(s1)

    const updateState = () => {
        setTimeout(() => {
            setState({
                "name": "vivek",
                "class": "10f"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{ state, updateState }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState