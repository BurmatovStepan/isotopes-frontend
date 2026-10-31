import { fetchPublished } from "@/entities/Isotope/api/requests";
import type { Route } from "./+types/Feed.route";
import FeedPage from "./Feed";

export async function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const rawExponent = url.searchParams.get('maxHalfLifeExponent');

    const parsedExponent =
        rawExponent === null
            ? -1
            : Number(rawExponent);

    const maxHalfLifeExponent =
        Number.isInteger(parsedExponent)
            && parsedExponent >= -1
            && parsedExponent <= 27
            ? parsedExponent
            : -1

    let limit = undefined;

    if (maxHalfLifeExponent !== -1) {
        limit = 10n ** BigInt(maxHalfLifeExponent);
    }

    return {
        isotopes: await fetchPublished(limit),
        maxHalfLifeExponent,
    };
}

export default function FeedRoute({
    loaderData,
}: Route.ComponentProps) {
    return <FeedPage
        isotopes={loaderData.isotopes}
        maxHalfLifeExponent={loaderData.maxHalfLifeExponent}
    />
}
