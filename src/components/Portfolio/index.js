import React from 'react';

function Portfolio() {

    return (
        <section>
            <h2>Projects</h2>
            <div>
                <h4>One Stop Job</h4>
                <a href="https://github.com/frostyausty/OneStopJob">GitHub Repo</a>
                <a href="https://frostyausty.github.io/OneStopJob/">Live application</a>
                {/* <img src={require("../../assets/projectPhotos/onestopjob.jpg").default} alt="one stop job front page"></img> */}
            </div>

            <div>
                <h4>24-Chains</h4>
                <a href="https://github.com/MarynaPR/24-chains">GitHub Repo</a>
                <a href="https://dry-mesa-09626.herokuapp.com/">Live application</a>
                {/* <img src={require("../../assets/projectPhotos/24chains.jpg").default} alt="project 2 24-chains login page"></img> */}
            </div>

            <div>
                <h4>Social Network API</h4>
                <a href="https://github.com/frostyausty/SocialNetworkAPI">GitHub Repo</a>
                <a href="https://drive.google.com/file/d/1DSmmW3wcOSMIHGgTM-hmHJlOLBEVSFz_/view">Walkthrough Video</a>
                {/* <img src={require("../../assets/projectPhotos/socialnetworkapi.jpg").default} alt="socialnetworkapi photo"></img> */}
            </div>

            <div>
                <h4>Budget Tracker</h4>
                <a href="https://github.com/frostyausty/BudgetTracker">GitHub Repo</a>
                <a href="https://pure-thicket-17207.herokuapp.com/">Live application</a>
                {/* <img src={require("../../assets/projectPhotos/budgettracker.jpg").default} alt="budget tracker photo"></img> */}
            </div>

            <div>
                <h4>Work Day Scheduler</h4>
                <a href="https://github.com/frostyausty/WorkDayScheduler">GitHub Repo</a>
                <a href="https://frostyausty.github.io/WorkDayScheduler/">Live application</a>
                {/* <img src={require("../../assets/projectPhotos/workdayscheduler.jpg").default} alt="scheduler photo"></img> */}
            </div>

            <div>
                <h4>Run Buddy</h4>
                <a href="https://github.com/frostyausty/run-buddy">GitHub Repo</a>
                <a href="https://frostyausty.github.io/run-buddy/">Live application</a>
                {/* <img src={require("../../assets/projectPhotos/runbuddy.jpg").default} alt="run buddy front page"></img> */}
            </div>

        </section>
    );
}

export default Portfolio;