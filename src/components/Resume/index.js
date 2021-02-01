import React from 'react';
import resume from '../../assets/files/AustinPriceResume.docx'

function Resume() {
    return (
        <section>
            <h2>List of proficiencies / Resume</h2>

            <p>
                <h3>Frameworks</h3>
                -Express.js <br/>
                -jQuery <br/>
                -React.js <br/>

                <h3>Languages</h3>
                -Javascript <br/>
                -CSS <br/>
                -SQL <br/>

                <h3>Databases</h3>
                -MongoDB <br/>
                -MySQL <br/>
            </p>

            <br />

            <a className="a-resume" href={resume} target="_blank" rel="noreferrer" download="AustinPrice_Resume">Download Resume</a>
        </section>
    );
}

export default Resume;