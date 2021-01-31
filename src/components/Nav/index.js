import React from 'react';

function Nav() {

    return (
        <header className="flex-row">
            <h1 className="title">
                Austin Price
            </h1>
            <nav>
                <ul className="flex-row">
                    <li className="nav-button">
                       <button>About me</button>
                    </li>
                    <li className="nav-button">
                        <button>Portfolio</button>
                    </li>
                    <li className="nav-button">
                        <button>Contact</button>
                    </li>
                    <li className="nav-button">
                        <button>Resume</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;