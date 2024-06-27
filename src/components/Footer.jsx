import gitHub from "/img/GitHub.png";
import linkedin from "/img/LinkedIn.png";
import instagram from "/img/Instagram.png"

export default function Footer() {
    return (
        <footer className="container d-flex flex-wrap justify-content-center align-items-center py-3 border-top mt-4">
        <a href="https://github.com/finntendoverse" target="_blank">
            <img src={gitHub} alt="GitHub icon" className="me-3" width="50" height="50" />
        </a>
        <a href="https://www.linkedin.com/in/finnlambouris" target="_blank">
            <img src={linkedin} alt="LinkedIn icon" className="me-3" width="50" height="50" />
        </a>
        <a href="https://www.instagram.com/finnlambouris" target="_blank">
            <img src={instagram} alt="Instagram icon" width="50" height="50" />
        </a>
        </footer>
    );
}