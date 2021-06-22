import { useEffect, useRef, useState } from "react";

const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
    },
    {
        id: 2,
        url: '/about',
        text: 'about',
    },
    {
        id: 3,
        url: '/projects',
        text: 'projects',
    },
    {
        id: 4,
        url: '/contact',
        text: 'contact',
    },
    {
        id: 5,
        url: '/profile',
        text: 'profile',
    },
]

const Nav = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        linksContainerRef.current.style.height = showLinks ? `${linksHeight}px` : "auto";
    }, [showLinks])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" onClick={toggleLinks}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`navbar-collapse justify-content-md-center ${showLinks ? "show" : ""}`} ref={linksContainerRef}>
                    <ul className="navbar-nav" ref={linksRef}>
                        {
                            links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id} className="nav-item">
                                        <a href={url} className="nav-link text-capitalize">{text}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;