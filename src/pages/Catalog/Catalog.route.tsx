import { fetchAllPublished } from '@/entities/Isotope/api/requests';

import CatalogPage from './Catalog';

import type { Route } from "./+types/Catalog.route";
export const handle = {
    pageClass: "page--catalog",
};


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
        isotopes: await fetchAllPublished(limit),
        maxHalfLifeExponent,
    };
}

export default function CatalogRoute({
    loaderData,
}: Route.ComponentProps) {
    return <CatalogPage
        isotopes={loaderData.isotopes}
        maxHalfLifeExponent={loaderData.maxHalfLifeExponent}
    />
}
