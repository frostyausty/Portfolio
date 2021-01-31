import React from 'react';

function Nav() {

    return (
        <header>
            <h1>
                Austin Price
            </h1>
            <nav>
                <ul>
                    <li>
                       <button>About me</button>
                    </li>
                    <li>
                        <button>Portfolio</button>
                    </li>
                    <li>
                        <button>Contact</button>
                    </li>
                    <li>
                        <button>Resume</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;