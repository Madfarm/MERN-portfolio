import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header>
            <h1>Portfolio</h1>
            <nav>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
}