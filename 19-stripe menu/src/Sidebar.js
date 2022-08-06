import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

function Sidebar() {
    const {
        isSubmenuOpen, isSideBarOpen, openSubmenu, openSideBar, closeSubmenu, closeSiderBar
    } = useGlobalContext()
    return (
        <aside className={`sidebar-wrapper ${isSideBarOpen && 'show'}`}>
            <div className="sidebar">
                <button className="close-btn" onClick={() => closeSiderBar()}>
                    <FaTimes></FaTimes>
                </button>
                <div className="sidebar-links">
                    {sublinks.map((item, index) => {
                        const { page, links } = item
                        return <article key={index}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map((link, index) => {
                                    const { url, icon, label } = link
                                    return <a key={index} href={url}>
                                        {icon} {label}
                                    </a>
                                })}
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </aside>
    )
}

export default Sidebar