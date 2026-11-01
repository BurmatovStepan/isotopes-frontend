import './css/reset.css';
import './css/typography.css';
import './css/variables.css';
import './css/style.css';

import { Links, Meta, Outlet, Scripts, ScrollRestoration, useMatches } from 'react-router';

import NavBar from './features/NavBar/NavBar';
import { getVisibleNavItems } from './navigation';
import { makeClassString } from './shared/utils/makeClassString';

type ShellClasses = {
    pageClass?: string;
};

export default function App() {
    const matches = useMatches();
    const shell = [...matches]
        .reverse()
        .map(match => match.handle as ShellClasses)
        .find(handle => handle?.pageClass)

    return (
        <html lang="ru">
            <head>
                <meta name="color-scheme" content="dark" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                <Meta />
                <Links />
            </head>
            <body>
                <div className={makeClassString("page", shell?.pageClass)}>
                    <Outlet />
                    <NavBar
                        items={getVisibleNavItems(false)}
                    />

                </div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
