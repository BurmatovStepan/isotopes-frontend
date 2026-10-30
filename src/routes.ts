import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
    ...prefix('isotopes', [
        index("./pages/Home/Home.route.tsx"),
        route("feed", "./pages/Feed/Feed.route.tsx"),
    ])
] satisfies RouteConfig;
