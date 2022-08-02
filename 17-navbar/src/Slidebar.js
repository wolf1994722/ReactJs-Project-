import React from 'react'
import { links, social } from './data';

function Slidebar() {
    return (
        <>
            <h2>Sidebar data</h2>
            <div className="links-container show-container">
                <ul className="links">
                    {
                        links.map(link => {
                            const { id, url, text } = link
                            return (<li key={id}>
                                {/*<Link to="#">Home</Link> */}
                                <a href={url}>{text}</a>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Slidebar