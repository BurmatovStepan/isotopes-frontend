import { Outlet, Scripts } from "react-router";
import { Meta, Links, ScrollRestoration } from "react-router";
import './css/reset.css';
import './css/typography.css';
import './css/variables.css';
import './css/style.css';

export default function App() {
  return (
    <html lang="ru">
      <head>
        <meta name="color-scheme" content="dark"/>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
