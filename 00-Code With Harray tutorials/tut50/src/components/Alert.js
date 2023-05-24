import React from 'react'

function Alert(props) {
    return (
        <>
            <div className={`alert alert-info alert-dismissible fade show`} role="alert">
                <strong>content</strong>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                />
            </div>
        </>
    )
}

export default Alert