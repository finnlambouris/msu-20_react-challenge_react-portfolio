import forkYeah from "/img/fork-yeah.png";
import techBlog from "/img/tech-blog.png";
import boozyBitches from "/img/boozy-bitches.png";
import survivalGuide from "/img/survival-guide.png";
import weatherDashboard from "/img/weather-dashboard.png";
import codeQuiz from "/img/code-quiz.png";

const applications = [
  {
    title: "Fork Yeah",
    photo: forkYeah,
    deployedLink: "https://msu-fork-yeah-2d1b70fc64c1.herokuapp.com/",
    githubLink:
      "https://github.com/finntendoverse/msu-interactive-full-stack-project_fork-yeah",
  },
  {
    title: "Boozy Bitches",
    photo: boozyBitches,
    deployedLink:
      "https://finntendoverse.github.io/msu-interactive-front-end-project/",
    githubLink:
      "https://github.com/finntendoverse/msu-interactive-front-end-project",
  },
  {
    title: "Tech Blog",
    photo: techBlog,
    deployedLink: "https://msu-tech-blog-6e7b358eb3a0.herokuapp.com/",
    githubLink:
      "https://github.com/finntendoverse/msu-14-model-view-controller-challenge_Tech-blog",
  },
  {
    title: "MSU Coding Bootcamp Survival Guide",
    photo: survivalGuide,
    deployedLink:
      "https://finntendoverse.github.io/msu-coding-bootcamp-survival-guide/",
    githubLink:
      "https://github.com/finntendoverse/msu-coding-bootcamp-survival-guide",
  },
  {
    title: "Weather Dashboard",
    photo: weatherDashboard,
    deployedLink:
      "https://finntendoverse.github.io/msu-06-server-side-apis-challenge/",
    githubLink:
      "https://github.com/finntendoverse/msu-06-server-side-apis-challenge",
  },
  {
    title: "Code Quiz",
    photo: codeQuiz,
    deployedLink: "https://finntendoverse.github.io/msu-04-code-quiz/",
    githubLink: "https://github.com/finntendoverse/msu-04-code-quiz",
  },
];

export default function Application() {
  return (
<div className="row row-cols-md-2 g-4">
  {applications.map((app) => (
    <div className="col" key={app.title}>
      <div className="card h-100">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h3 className="text-center">{app.title}</h3>
          <img src={app.photo} alt={`A photo of ${app.title}`} className="img-fluid mb-3" />
          <div className="d-flex w-100 justify-content-center">
            <p><a href={app.deployedLink} target="_blank" className="btn btn-primary mx-2 my-1">Deployed Application</a></p>
            <p><a href={app.githubLink} target="_blank" className="btn btn-primary mx-2 my-1">GitHub Repository</a></p>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
  );
}
