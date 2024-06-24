import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <h1>Finn Lambouris</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>,
                <Link to="/portfolio">Portfolio</Link>,
                <Link to="/resume">Resume</Link>,
                <Link to="/contact">Contact</Link>
            </nav>
        </>
    );
}