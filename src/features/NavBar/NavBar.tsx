import { makeClassString } from "@/shared/utils/makeClassString";
import { Access, type NavBarProps, type Route } from "./types";
import { NavLink } from "react-router";

const BASE = 'isotopes';

const ROUTES: Route[] = [
    {
        path: 'feed',
        access: Access.Everyone,
        iconUrl: '/icons/home.svg',
    },
    {
        path: 'catalog',
        access: Access.Everyone,
        iconUrl: '/icons/grid.svg',
    },
    {
        path: 'add',
        access: Access.Auth,
        iconUrl: '/icons/circle-plus.svg',
    },
    {
        path: 'auth',
        access: Access.Guest,
        iconUrl: '/icons/bin.svg',
    },
]

export default function NavBar({
    className,
    isGuest
}: NavBarProps) {
    const items = ROUTES
        .filter(({ access }) =>
            access === Access.Everyone
                || (isGuest ? access === Access.Guest : access === Access.Auth)
        )
        .map(({ path, iconUrl }) => ({
            to: `${BASE}/${path}`,
            iconUrl,
        }))

    const classes = makeClassString(
        'navigation',
        className,
    )

    return (
        <nav className={classes}>
            {items.map(({ to, iconUrl }) =>
                <NavLink
                    key={to}
                    to={to}
                    className='navigation__link'
                >
                    <div className="navigation__icon" style={{ maskImage: `url("${iconUrl}")` }} />
                </NavLink>
            )}
        </nav>
    );
}
