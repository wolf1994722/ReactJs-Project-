import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const anchor = { textDecoration: 'none', color: '#262626', margin : '0px 10px' }

const Navbar = (props) => {
    const [color, setColor] = useState('black')
    const [theme, setTheme] = useState('white')

    const changeTheme = (color) => {
        setTheme(color)
        setColor('white')
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar`} style={{ backgroundColor: theme }} data-bs-theme={theme}>
                <div className="container-fluid">
                    {/* <a className={`navbar-brand text-${color}`} href="/">
                        {props.title}
                    </a> */}
                    <Link to="/about" style={anchor} className={`nav-link text-${color} active`}>{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className={`nav-link text-${color} active`} aria-current="page" href="/">Home</a> */}
                                <Link to="/" style={anchor} className={`nav-link text-${color} active`}>Home</Link>
                            </li>
                            {props.links.map((item, index) => {
                                return (
                                    <li className="nav-item" key={index}>
                                        {/* <a className={`nav-link text-${color}`} href={item.url}>{item.title}</a> */}
                                        <Link to={item.url} style={anchor} className={`nav-link text-${color} active`}>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="form-check">
                            <input className="form-check-input" style={{ backgroundColor: 'blue', borderColor: 'blue', boxShadow: '0 0 3px #262626' }} type="radio" name="blueColor" onClick={() => changeTheme('blue')} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" style={{ backgroundColor: 'purple', borderColor: 'purple', boxShadow: '0 0 3px #262626' }} type="radio" name="cyanColor" onClick={() => changeTheme('purple')} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" style={{ backgroundColor: 'green', borderColor: 'white', boxShadow: '0 0 3px #262626' }} type="radio" name="cyanColor" onClick={() => changeTheme('green')} />
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" style={{ backgroundColor: 'black', borderColor: 'black', boxShadow: '0 0 3px #262626' }} type="radio" name="greenColor" onClick={() => changeTheme('black')} />
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
