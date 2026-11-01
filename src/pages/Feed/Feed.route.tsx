import { fetchFirstPublished } from "@/entities/Isotope/api/requests";
import { data } from "react-router";
import type { Route } from "./+types/Feed.route"
import FeedPage from "./Feed";

export const handle = {
    pageClass: "page--feed isotope-page",
};

export async function loader() {
    const isotope = await fetchFirstPublished();

    if (isotope === null) {
        throw data(
            null,
            {
                statusText: 'Изотоп не найден',
                status: 404
            }
        )
    }

    return {
        isotope,
    }
}

export default function FeedRoute({
    loaderData,
}: Route.ComponentProps) {
    return <FeedPage
        isotope={loaderData.isotope}
    />
}
