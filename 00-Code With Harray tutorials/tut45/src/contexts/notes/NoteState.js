import React from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState