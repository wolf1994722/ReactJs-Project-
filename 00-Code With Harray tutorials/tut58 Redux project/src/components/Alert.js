import React from 'react'

const Alert = (props) => {
    let { alert } = props
    return (
        <>
            {
                alert &&
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{alert.msg}</strong>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    />
                </div>
            }
        </>
    )
}

export default Alert