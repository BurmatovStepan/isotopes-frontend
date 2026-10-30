import { Outlet, Scripts } from "react-router";
import { Meta, Links, ScrollRestoration } from "react-router";

export default function App() {
  return (
    <html lang="ru">
      <head>
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
