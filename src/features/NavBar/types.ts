export type NavBarProps = {
    className?: string;
    isGuest: boolean;
}

export const Access = {
    Everyone: 0,
    Guest: 1,
    Auth: 2,
} as const;

export type Access =
    (typeof Access)[keyof typeof Access];

export type Route = {
    path: string;
    access: Access;
    iconUrl: string;
}
