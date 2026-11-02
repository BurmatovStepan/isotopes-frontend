import { data } from 'react-router';

import { fetchDraft } from '@/entities/Isotope/api/requests';

import AddPage from './Add';

import type { Route } from "./+types/Add.route";

export const handle = {
    pageClass: 'page--add',
};

export async function loader() {
    const isotopeDraft = await fetchDraft();

    if (!isotopeDraft) {
        throw data(
            null,
            {
                status: 404,
                statusText: 'Черновик не найден',
            }
        )
    }

    return {
        isotopeDraft,
    }
}

export default function AddRoute({
    loaderData
}: Route.ComponentProps) {
    return <AddPage
        isotopeDraft={loaderData.isotopeDraft}
    />
}
