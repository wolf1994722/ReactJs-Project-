import React from 'react'
import logo from './logo.svg';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

function Sidebar() {
    const { isSidedBarOpen, closeSideBar } = useGlobalContext()
    return (
        <div className={`sidebar ${isSidedBarOpen && 'show-sidebar' }`}> {/*show-sidebar*/}
            <div className="sidebar-header">
                <img src={logo} alt="coding addict" className='logo' />
                <div className="close-btn" onClick={closeSideBar}>
                    <FaTimes></FaTimes>
                </div>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, text, icon } = link
                    return <li key={id}>
                        <a href={url}>{icon}{text}</a>
                    </li>
                })}
            </ul>
            <ul className="social-icons">
                {social.map((link) => {
                    const { id, url, icon } = link
                    return <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Sidebar