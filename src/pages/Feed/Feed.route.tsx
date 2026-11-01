import { fetchFirstPublished } from "@/entities/Isotope/api/requests";
import type { Route } from "./+types/Feed.route"
import FeedPage from "./Feed";

export const handle = {
    pageClass: "page--feed isotope-page",
};

export async function loader({
    request
}: Route.LoaderArgs) {
    return {
        isotope: await fetchFirstPublished(),
    }
}

export default function FeedRoute({
    loaderData,
}: Route.ComponentProps) {
    return <FeedPage
        isotope={loaderData.isotope!}
    />
}
