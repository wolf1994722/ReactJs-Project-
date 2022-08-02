// import React from 'react';
import React, { useState, useRef, useEffect } from 'react';
// import { FaBars, FaTwitter } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
// import { Link } from "react-router-dom";

function NavBar() {
    const [showLinks, setShowLinks] = useState(false)
    const linkContainerRef = useRef(null)
    const linkRef = useRef(null)

    useEffect(() => {
        const linkHeight = linkRef.current.getBoundingClientRect()
        // console.log(linkHeight);
        // bottom: 266.24999237060547
        // height: 199.92897033691406
        // left: 0
        // right: 713.6363525390625
        // top: 66.3210220336914
        // width: 713.6363525390625
        // x: 0
        // y: 66.3210220336914
        // linkContainerRef.current
        if(showLinks){
            linkContainerRef.current.style.height = `${linkHeight.height}px`
        }else linkContainerRef.current.style.height = `0px`
        return () => { }
    }, [showLinks])


    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    vishal
                    {/*<img src={logo} className='logo' alt='logo' />*/}
                    <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                {/* ${showLinks ? 'show-container' : null} */}

                <div ref={linkContainerRef} className={`links-container ${showLinks && 'show-container'}`}>
                    <ul ref={linkRef} className='links'>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>

    )
}

export default NavBar