import React, {useState} from 'react';

function Portfolio() {
    // const [project, setProject] = useState(0);

    const [projects] = useState([
        {
            title: 'wordUp',
            github: 'https://github.com/njderenne/wordUp',
            deploy: 'https://fast-shelf-56121.herokuapp.com/',
            file: 'wordUp'
        },

        {
            title: '24-Chains',
            github: 'https://github.com/MarynaPR/24-chains',
            deploy: 'https://dry-mesa-09626.herokuapp.com/',
            file: '24chains'
        },

        {
            title: 'One Stop Job',
            github: 'https://github.com/frostyausty/OneStopJob',
            deploy: 'https://frostyausty.github.io/OneStopJob/',
            file: 'onestopjob'
        },

        {
            title: 'Social Network API',
            github: 'https://github.com/frostyausty/SocialNetworkAPI',
            deploy: 'https://drive.google.com/file/d/1DSmmW3wcOSMIHGgTM-hmHJlOLBEVSFz_/view',
            file: 'socialnetworkapi'
        },

        {
            title: 'Budget Tracker',
            github: 'https://github.com/frostyausty/BudgetTracker',
            deploy: 'https://pure-thicket-17207.herokuapp.com/',
            file: 'budgettracker'
        },

        {
            title: 'Work Day Scheduler',
            github: 'https://github.com/frostyausty/WorkDayScheduler',
            deploy: 'https://frostyausty.github.io/WorkDayScheduler/',
            file: 'workdayscheduler'
        }

    ])

    return (
        <section>
            <h2>Projects</h2>
            <div className = "project-container">
                {projects.map((project, i) => (
                    <div className={`project project-${i+1}`} key={project.title}>
                        <h3>{project.title}</h3>
                        <a className ="gitlink" href={project.github}>GitHub Repo</a>
                        <a className ="applink" href={project.deploy}>Live application</a>
                        <img src={require(`../../assets/projectPhotos/${project.file}.jpg`).default} 
                        alt={project.title}
                        className="project-img"
                        key={i} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;