import { NavLink } from 'react-router';

import { makeClassString } from '@/shared/utils/makeClassString';

import type { NavBarProps } from './types';

export default function NavBar({
    items,
    className,
}: NavBarProps) {
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
