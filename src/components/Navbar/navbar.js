import React from 'react'

import './styles.css'

function Navbar() {
    const url = "#";
    return (
        <nav className="Navbar">
            <div className="logo"><span>ar</span></div>
            <ul className="links">
                <li className="link-1 active"><a href={url}>Work</a></li>
                <li className="link-2"><a href={url}>About</a></li>
                <li className="link-3"><a href={url}>Contact</a></li>
                <li className="link-4"><a href={url}>Other</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
