import { fetchFirstPublished, fetchNextPublished, fetchPublishedById } from "@/entities/Isotope/api/requests";
import type { Route } from "./+types/FeedById.route"
import FeedPage from "./Feed";
import type { IsotopeView } from "@/entities/Isotope/types";
import { data } from "react-router";

export const handle = {
    pageClass: "page--feed isotope-page",
};

export async function loader({
    request,
    params,
}: Route.LoaderArgs) {
    let isotope: IsotopeView | null;
    const isotopeId = Number(params.isotopeId);

    const url = new URL(request.url);
    const isNext = url.searchParams.get('next') === 'true';

    if (isNext) {
        isotope = await fetchNextPublished(isotopeId);

        if (isotope === null) {
            isotope = await fetchFirstPublished();
        }

    } else {
        isotope = await fetchPublishedById(isotopeId);
    }

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

export default function FeedByIdRoute({
    loaderData,
}: Route.ComponentProps) {
    return <FeedPage
        isotope={loaderData.isotope!}
    />
}
