import { IsotopeStatus, type IsotopeView } from "../types";
import { ISOTOPE_DTOS } from "../../../mock/data";
import { mapIsotopeDTO } from "./mappers";

export async function fetchPublished(
): Promise<IsotopeView[]> {
    return Object.values(ISOTOPE_DTOS)
        .filter(dto => dto.status === IsotopeStatus.Published)
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
