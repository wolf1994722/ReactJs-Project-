import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from "./data"

function Navbar() {
    const {
        isSubmenuOpen, isSideBarOpen, openSubmenu, openSideBar, closeSubmenu, closeSiderBar
    } = useGlobalContext()

    const displaySubMenu = (e) => {
        // let tempBtn = e.target.clientWidth
        let page = e.target.textContent
        let tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.bottom - 3 // submenu is 3px
        openSubmenu(page,{center,bottom})
    }

    const handleSubmenu = (e)=>{
        if(!e.target.classList.contains('link-btn')){
            closeSubmenu()
        }
    }

    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="stripe" className='nav-logo' />
                    <button className="btn toggle-btn" onClick={openSideBar}>
                        <FaBars></FaBars>
                    </button>
                </div>
                <ul className="nav-links">
                    {sublinks.map((item, index) => {
                        const { page, links } = item
                        return <li key={index}>
                            <button className="link-btn" onMouseOver={(e) => displaySubMenu(e)}>
                                {page}
                            </button>
                        </li>
                    })}
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar