import React, { useState } from 'react'

function NavBar({c1, c2, c3}){

    return (
        <nav className = "nav">
            <ul>
                <li>
                    <a href="/Explore" className={c1}>Trip</a>
                </li>
                <li>
                    <a href="/Route" className={c2}>Route</a>
                </li>
                <li>
                    <a href="/Data" className={c3}>Data</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
