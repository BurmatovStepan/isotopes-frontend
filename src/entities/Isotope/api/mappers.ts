import { resolveMediaUrl } from '@/shared/utils/resolveMediaUrl';

import type { IsotopeView } from "../types"
import type { IsotopeDTO } from "./types"

const NANOSECONDS_PER_SECOND = 1000000000n;
const SECONDS_PER_YEAR = 31556952n;

const TIME_UNITS = [
    { label: 'млрд. л.', nanoseconds: SECONDS_PER_YEAR * 1000000000n * NANOSECONDS_PER_SECOND },
    { label: 'млн. л.', nanoseconds: SECONDS_PER_YEAR * 1000000n * NANOSECONDS_PER_SECOND },
    { label: 'тыс. л.', nanoseconds: SECONDS_PER_YEAR * 1000n * NANOSECONDS_PER_SECOND },
    { label: 'л.', nanoseconds: SECONDS_PER_YEAR * NANOSECONDS_PER_SECOND },
    { label: 'д.', nanoseconds: 86400n * NANOSECONDS_PER_SECOND },
    { label: 'ч.', nanoseconds: 3600n * NANOSECONDS_PER_SECOND },
    { label: 'мин.', nanoseconds: 60n * NANOSECONDS_PER_SECOND },
    { label: 'сек.', nanoseconds: NANOSECONDS_PER_SECOND },
    { label: 'мс.', nanoseconds: 1000000n },
    { label: 'мкс.', nanoseconds: 1000n },
    { label: 'нс.', nanoseconds: 1n },
];

export const mapIsotopeDTO = (dto: IsotopeDTO): IsotopeView => ({
    ...dto,
    imageUrl: dto.imageUrl === null ? null : resolveMediaUrl(dto.imageUrl),
    videoUrl: dto.videoUrl === null ? null : resolveMediaUrl(dto.videoUrl),
    halfLife: dto.halfLife === null ? null : BigInt(dto.halfLife),
    halfLifeFormatted:
        dto.halfLife !== null
            ? formatHalfLifeCompact(BigInt(dto.halfLife))
            : { compact: 'NaN', full: 'NaN' },

})

function formatHalfLife(nanoseconds: bigint) {
    if (nanoseconds === 0n) {
        return '0 сек.';
    }

    const matchedUnit = TIME_UNITS.find(unit => nanoseconds >= unit.nanoseconds);

    if (!matchedUnit) {
        return `${nanoseconds.toString()} нс.`
    }

    const integerPart = nanoseconds / matchedUnit.nanoseconds;
    const remainder = nanoseconds % matchedUnit.nanoseconds;
    const fractionalPart = (remainder * 100n) / matchedUnit.nanoseconds;

    if (fractionalPart === 0n) {
        return `${integerPart} ${matchedUnit.label}`;
    }


    const fractionString = fractionalPart.toString().padStart(2, '0').replace(/0+$/, '');
    return `${integerPart}.${fractionString} ${matchedUnit.label}`;
}

function formatHalfLifeCompact(nanoseconds: bigint) {
    const full = formatHalfLife(nanoseconds);

    const compact = full
        .replace(/^(\d+)(?:\.(\d+))?\s+.*$/, (_, whole, fraction = '') => {
            const value = `${whole}${fraction ? `.${fraction}` : ''}`;
            const n = Number(value);

            return n >= 1_000_000
                ? `${n.toExponential(1).replace('e+', 'e')}`
                : value;
        });

    return { compact, full };
}
