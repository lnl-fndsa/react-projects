import { Link, useRouteMatch } from 'react-router-dom';

const CustomNavLink = ({ label, to, activeOnlyWhenExact }) => {

    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    let active = match ? "active" : "";

    return (
        <li className={`nav-item mx-2`}>
            <Link to={to} className={`nav-link text-center ${active}`}>{label}</Link>
        </li>
    );
}

const Nav = ({ routes }) => {
    return (
        <nav className="navbar navbar-expand-md">
            <ul className="navbar-nav mx-auto">
                {
                    routes.map((route) => {
                        const { id, path, name } = route;
                        return (
                            <CustomNavLink key={id} label={name} to={path} activeOnlyWhenExact={path === '/' ? true : ''} />
                        );
                    })
                }
            </ul>
        </nav>
    );
}

export default Nav;