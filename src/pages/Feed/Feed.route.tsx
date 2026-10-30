import { fetchPublished } from "../../entities/Isotope/api/requests";
import type { Route } from "./+types/Feed.route";
import FeedPage from "./Feed";

export async function loader() {
    return {
        isotopes: await fetchPublished(),
    };
}

export default function FeedRoute({
    loaderData,
}: Route.ComponentProps) {
    return <FeedPage isotopes={loaderData.isotopes} />
}
