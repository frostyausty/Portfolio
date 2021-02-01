import React from 'react';
import resume from '../../assets/files/AustinPriceResume.docx'

function Resume() {
    return (
        <section>
            <h2>Resume</h2>
            <a href={resume} target="_blank" rel="noreferrer" download="AustinPrice_Resume">Download Resume</a>
        </section>
    );
}

export default Resume;