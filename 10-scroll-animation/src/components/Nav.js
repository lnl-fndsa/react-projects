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
    const navRef = useRef(null);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const [navbar, setNavbar] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    const changeBackground = () => {
        const top = navRef.current.getBoundingClientRect().top;
        if (top <= 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, [])

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        linksContainerRef.current.style.height = showLinks ? `${linksHeight}px` : "0px";
    }, [showLinks])

    return (
        <nav className={navbar ? "nav-container active" : "nav-container"} ref={navRef}>
            <div className="nav-center">
                <div className="nav-header">
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {
                            links.map((link) => {
                                const { id, url, text } = link;
                                return (
                                    <li key={id}>
                                        <a href={url}>{text}</a>
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