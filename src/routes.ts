import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    ...prefix('isotopes', [
        route("feed", "./pages/Home/Home.route.tsx"),
        route("catalog", "./pages/Catalog/Catalog.route.tsx"),
    ])
] satisfies RouteConfig;
