import { resolveMediaUrl } from "../../../shared/utils/resolveMediaUrl"
import type { IsotopeView } from "../types"
import type { IsotopeDTO } from "./types"

export const mapIsotopeDTO = (dto: IsotopeDTO): IsotopeView => ({
    ...dto,
    imageUrl: dto.imageUrl === null ? null : resolveMediaUrl(dto.imageUrl),
    videoUrl: dto.videoUrl === null ? null : resolveMediaUrl(dto.videoUrl),
    halfLife: dto.halfLife === null ? null : BigInt(dto.halfLife),
})
