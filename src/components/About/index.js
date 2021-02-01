import React from 'react';

function About() {
    return (
        <section>
            <h2>About</h2>
            <p>
                Welcome to my portfolio! Currently I am enrolled in a full stack web development bootcamp through the University of Wisconsin Extended Campus. I graduated from UW-Whitewater in 2016 with my BBA in Information Technology and after graduating completed contract work as a Business Analyst and Quality Assurance Analyst. After working as a Buyer at a small computer manufacturer for two years I decided I wanted to become a full stack web developer. My hobbies include golf, snowboarding, weightlifting and (when I buy another bike) riding motorcycles!
            </p>

            <img className="about-img" src={require('../../assets/files/golfing.jpg').default} alt="asutin golfing" key="golfing"/>

        </section>
    );
}

export default About;