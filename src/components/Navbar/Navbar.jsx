import { useState } from "react";
import "./Navbar.css";

const navLinks = {
    home: { label: "Isaiah", path: "#intro" },
    about: { label: "About", path: "https://www.linkedin.com/in/isaiahasanta/" },
    experience: {
        label: "Experience",
        path: "https://docs.google.com/document/d/1MHjsiJQJE25XYcKBKqE9F3zFayM6BubI/edit?usp=sharing&ouid=106151378304154963111&rtpof=true&sd=true",
    },
    projects: { label: "Projects", path: "#Projects" },
    github: { label: "GitHub", path: "https://github.com/IsaiahSantamaria" },
    linkedin: { label: "LinkedIn", path: "https://www.linkedin.com/in/isaiahasanta/" },
    instagram: {
        label: "Instagram",
        path: "https://www.instagram.com/zaysantcomputes/?utm_source=ig_web_button_share_sheet",
    },
    email: { label: "Email", path: "mailto:isaiahasant@gmail.com" },
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b-5 pb-2 border-b-sky-300 pl-[10vw] pr-[10vw]">
            <div id="navbar_left" className="navbar-left flex">
                <a href={navLinks.home.path}>
                    <ul className="max-[500px]:text-sm">{navLinks.home.label}</ul>
                </a>
                <a href={navLinks.experience.path} target="_blank" rel="noopener noreferrer">
                    <ul className="max-[500px]:text-sm">{navLinks.experience.label}</ul>
                </a>
                <a href={navLinks.projects.path}>
                    <ul className="max-[500px]:text-sm">{navLinks.projects.label}</ul>
                </a>
            </div>

            <div id="navbar_right" className="flex gap-[15px]">
                <a href={navLinks.github.path} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <span className="fa-brands fa-github" aria-hidden="true" />
                </a>
                <a href={navLinks.linkedin.path} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <span className="fa-brands fa-linkedin" aria-hidden="true" />
                </a>
                <a href={navLinks.instagram.path} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <span className="fa-brands fa-instagram" aria-hidden="true" />
                </a>
                <a href={navLinks.email.path} target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <span className="fa-regular fa-envelope" aria-hidden="true" />
                </a>
            </div>

            <div id="mobileNavbar">
                <div className="flex w-full flex-col items-start gap-2">
                    <button
                        type="button"
                        aria-label="Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobileNavbar_content"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <i className="fa-solid fa-bars fa-2x" aria-hidden="true" />
                    </button>

                    <div
                        id="mobileNavbar_content"
                        className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-start gap-3 text-left pl-2`}
                    >
                        <a href={navLinks.home.path}>{navLinks.home.label}</a>
                        <a href={navLinks.experience.path} target="_blank" rel="noopener noreferrer">
                            {navLinks.experience.label}
                        </a>
                        <a href={navLinks.projects.path}>{navLinks.projects.label}</a>

                        <a href={navLinks.github.path} aria-label="GitHub">
                            <span className="fa-brands fa-github" aria-hidden="true" />
                        </a>
                        <a href={navLinks.linkedin.path} aria-label="LinkedIn">
                            <span className="fa-brands fa-linkedin" aria-hidden="true" />
                        </a>
                        <a href={navLinks.instagram.path} aria-label="Instagram">
                            <span className="fa-brands fa-instagram" aria-hidden="true" />
                        </a>
                        <a href={navLinks.email.path} aria-label="Email">
                            <span className="fa-regular fa-envelope" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;