export const Access = {
    Everyone: 0,
    Guest: 1,
    Auth: 2,
} as const;

export type Access =
    (typeof Access)[keyof typeof Access];

export type NavItem = {
    to: string;
    iconUrl: string;
    access: Access;
};

const BASE = 'isotopes';

const NAV_ITEMS: NavItem[] = [
    {
        to: 'feed',
        access: Access.Everyone,
        iconUrl: '/icons/home.svg',
    },
    {
        to: 'catalog',
        access: Access.Everyone,
        iconUrl: '/icons/grid.svg',
    },
    {
        to: 'add',
        access: Access.Auth,
        iconUrl: '/icons/circle-plus.svg',
    },
    {
        to: 'auth',
        access: Access.Guest,
        iconUrl: '/icons/bin.svg',
    },
]

export function getVisibleNavItems(isGuest: boolean) {
    return NAV_ITEMS
        .filter(({ access }) =>
            access === Access.Everyone ||
            (isGuest ? access === Access.Guest : access === Access.Auth)
        )
        .map(item => ({
            ...item,
            to: `${BASE}/${item.to}`,
        }));
}
