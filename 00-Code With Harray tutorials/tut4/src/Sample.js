import React from 'react'
import a from './mod2'
import data from './mod1'
import aa, {b,c,d} from './mod3'

const Sample = () => {
    return (
        <>
            {a}
            {data.a}
            {data.b}
            {data.c}
            {data.d}

            <hr />

            {aa}
            {b}
            {c}
            {d}
        </>
    )
}

export default Sample