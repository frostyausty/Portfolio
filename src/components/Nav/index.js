import React from 'react';

function Nav(props) {
    const sections = ["About", "Portfolio", "Contact", "Resume"];

    return (
        <header className="flex-row">
            <h1 className="title">
                Austin Price
            </h1>
            <nav>
                <ul className="flex-row">
                    {sections.map(section => (
                        <li className="nav-button" key={section}>
                            <a
                                href={'#' + section.toLowerCase()}
                                onClick={() => props.setCurrentSection(section)}
                                className={props.currentSection === section ? 'nav-link active' : 'nav-link'}>
                                {section}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;