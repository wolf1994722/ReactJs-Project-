import React from 'react'

const Alert = (props) => {
    return (
        <>
            {   
                props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{props.alert.msg}</strong>
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