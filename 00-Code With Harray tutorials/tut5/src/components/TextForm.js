import React, {useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('')

    const enterInput = (params) => {
        const {name, value} = params.target
        setText(value)
    }

    const upperCase = () => {
        setText((prev) => {
            return prev.toUpperCase()
        })
    }

    return (
        <>
            <div className="container my-4">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">
                        {props.labeling}
                    </label>
                    <textarea
                        className="form-control"
                        name="text"
                        id="myBox"
                        rows={3}
                        onChange={enterInput}
                        value={text}
                    />
                </div>
                <button className="btn btn-primary" onClick={upperCase}>
                    UpperCase
                </button>
            </div>
        </>
    )
}

export default TextForm