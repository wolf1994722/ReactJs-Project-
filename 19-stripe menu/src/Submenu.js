import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

function Submenu() {
    const {
        isSubmenuOpen, isSideBarOpen, openSubmenu, openSideBar, closeSubmenu, closeSiderBar, location, page: { page, links }
    } = useGlobalContext()
    const asideRef = useRef(null)
    const [column, setColumn] = useState('col-2')

    useEffect(() => {
        setColumn('col-2')

        const submenu = asideRef.current
        const { center, bottom } = location

        submenu.style.top = `${bottom}px`
        submenu.style.left = `${center}px`
     
        if(links.length === 3) setColumn('col-3')
        if(links.length > 3) setColumn('col-4')
        return () => { }
    }, [location,links])

    return (
        <aside ref={asideRef} className={`submenu ${isSubmenuOpen && 'show'}`}>
            <h4>{page}</h4>
            <div className={`submenu-center ${column}`}>
                {links.map((link,index)=>{
                    const {label,url,icon} = link
                    return <a href={url} key={index}>
                        {icon}
                        {label}
                    </a>
                })}
            </div>
        </aside>
    )
}

export default Submenu