import forkYeah from "../../public/img/fork-yeah.png";
import techBlog from "../../public/img/tech-blog.png";
import boozyBitches from "../../public/img/boozy-bitches.png";
import survivalGuide from "../../public/img/survival-guide.png";
import weatherDashboard from "../../public/img/weather-dashboard.png";
import codeQuiz from "../../public/img/code-quiz.png";

const applications = [
    {
        title: "Fork Yeah",
        photo: forkYeah,
        deployedLink: "https://msu-fork-yeah-2d1b70fc64c1.herokuapp.com/",
        githubLink: "https://github.com/finntendoverse/msu-interactive-full-stack-project_fork-yeah"
    },
    {
        title: "Boozy Bitches",
        photo: boozyBitches,
        deployedLink: "https://finntendoverse.github.io/msu-interactive-front-end-project/",
        githubLink: "https://github.com/finntendoverse/msu-interactive-front-end-project"
    },
    {
        title: "Tech Blog",
        photo: techBlog,
        deployedLink: "https://msu-tech-blog-6e7b358eb3a0.herokuapp.com/",
        githubLink: "https://github.com/finntendoverse/msu-14-model-view-controller-challenge_Tech-blog"
    },
    {
        title: "MSU Coding Bootcamp Survival Guide",
        photo: survivalGuide,
        deployedLink: "https://finntendoverse.github.io/msu-coding-bootcamp-survival-guide/",
        githubLink: "https://github.com/finntendoverse/msu-coding-bootcamp-survival-guide"
    },
    {
        title: "Weather Dashboard",
        photo: weatherDashboard,
        deployedLink: "https://finntendoverse.github.io/msu-06-server-side-apis-challenge/",
        githubLink: "https://github.com/finntendoverse/msu-06-server-side-apis-challenge"
    },
    {
        title: "Code Quiz",
        photo: codeQuiz,
        deployedLink: "https://finntendoverse.github.io/msu-04-code-quiz/",
        githubLink: "https://github.com/finntendoverse/msu-04-code-quiz"
    },
]

export default function Application() {
    return (
        <>
            <h2>My Developed Applications</h2>
            {applications.map((app) => (
              <>
                <h3>{app.title}</h3>
                <img src={app.photo} alt={`A photo of ${app.title}`} />
                <p><a href={app.deployedLink}>Deployed Application</a></p>
                <p><a href={app.githubLink}>GitHub Repository</a></p>
              </>
            ))}
        </>
    );
}