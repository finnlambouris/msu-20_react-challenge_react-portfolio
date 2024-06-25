import gitHub from "../../public/img/GitHub.png";
import linkedin from "../../public/img/LinkedIn.png";
import instagram from "../../public/img/Instagram.png"

export default function Footer() {
    return (
        <>
            <a href="https://github.com/finntendoverse"><img src={gitHub} alt="GitHub icon"/></a>
            <a href="https://github.com/finntendoverse"><img src={linkedin} alt="LinkedIn icon"/></a>
            <a href="https://github.com/finntendoverse"><img src={instagram} alt="Instagram icon"/></a>
        </>
    );
}