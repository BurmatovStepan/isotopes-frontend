import { Outlet, Scripts, useMatches } from "react-router";
import { makeClassString } from "./shared/utils/makeClassString";
import { Meta, Links, ScrollRestoration } from "react-router";
import './css/reset.css';
import './css/typography.css';
import './css/variables.css';
import './css/style.css';
import NavBar from "./features/NavBar/NavBar";

type ShellClasses = {
    pageClass?: string;
    navClass?: string;
};

export default function App() {
    const matches = useMatches();
    const shell = [...matches]
        .reverse()
        .map(match => match.handle as ShellClasses)
        .find(handle => handle?.pageClass || handle?.navClass)

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
                        isGuest={false}
                        className={shell?.navClass}
                    />

                </div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
