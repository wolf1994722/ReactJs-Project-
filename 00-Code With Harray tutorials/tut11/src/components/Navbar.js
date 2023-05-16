import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import DarkModeContext from '../context/DarkModeContext'

const Navbar = (props) => {
    const [theme, toggleTheme] = useContext(DarkModeContext)

    const msgReflect = () => {
        if(theme !== 'dark') props.showAlert("Dark Mode is Enabled 🔥", "success")
        else props.showAlert("Light Mode is Enabled 🔥", "success")
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar bg-${theme}`} data-bs-theme={theme}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {props.links.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link" href={item.url}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="form-check form-switch" onClick={msgReflect}>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                                onClick={toggleTheme}
                            />
                            <label className={`form-check-label text-${theme !== 'dark' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
                                {theme === 'light' ? '☀' : '🌙'}
                            </label>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}

Navbar.defaultProps = {
    title: "TextUtils",
    links: [
        {
            title: 'about 🐹',
            url: '/about'
        },
        {
            title: 'contact 🔥',
            url: '/contact'
        },
        {
            title: 'service 🔥',
            url: '/service'
        }
    ]
}

export default Navbar
