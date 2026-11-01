import { ISOTOPE_DTOS } from '@/mock/data';

import { IsotopeStatus } from '../types';
import { mapIsotopeDTO } from './mappers';

import type { IsotopeView } from '../types';

export async function fetchAllPublished(
    maxHalfLife?: bigint,
): Promise<IsotopeView[]> {
    return Object.values(ISOTOPE_DTOS)
        .filter(({ status }) => status === IsotopeStatus.Published)
        .filter(({ halfLife }) => {
            if (maxHalfLife === undefined) return true;
            if (halfLife === null) return false;

            return BigInt(halfLife) <= maxHalfLife;
        })
        .map(mapIsotopeDTO);
}


export async function fetchPublishedById(
    id: number,
): Promise<IsotopeView | null> {
    const dto = ISOTOPE_DTOS[id];

    if (!dto || dto.status !== IsotopeStatus.Published) {
        return null;
    }

    return mapIsotopeDTO(dto);
}

export async function fetchFirstPublished(
): Promise<IsotopeView | null> {
    const dto = Object.values(ISOTOPE_DTOS)
        .filter(dto => dto.status === IsotopeStatus.Published)
        .sort((a, b) => a.id - b.id)
        .at(0);

    if (!dto) return null;

    return mapIsotopeDTO(dto);
}

export async function fetchNextPublished(
    id: number,
): Promise<IsotopeView | null> {
    const dto = Object.values(ISOTOPE_DTOS)
        .filter(dto => dto.status === IsotopeStatus.Published)
        .sort((a, b) => a.id - b.id)
        .find(dto => dto.id > id);

    if (!dto) return null;

    return mapIsotopeDTO(dto);
}
