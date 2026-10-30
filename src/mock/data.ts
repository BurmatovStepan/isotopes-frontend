import { IsotopeStatus } from "@/entities/Isotope/types";
import { type IsotopeDTO } from "@/entities/Isotope/api/types";

export const USER = [
    { id: 1 },
    { id: 2 }
];

export const ISOTOPE = [
    {
        id: 1,
        name: 'Торий-232',
        halfLife: "443073600000000000000000000",
        isAlpha: true,
        description: 'Самый долгоживущий природный изотоп тория, постепенно распадающийся с образованием цепочки дочерних нуклидов. Рассматривается как перспективное топливо для торий-уранового ядерного цикла и потенциально может использоваться в энергетических реакторах будущего.',
        videoUrl: '5f1d8212-8e9b-42d3-a456-426614174001.mp4',
        imageUrl: 'a4a2a11b-8c2d-4e9f-9b1a-283451000001.jpg',
        status: IsotopeStatus.Published,
        authorId: 1
    },
    {
        id: 2,
        name: 'Калий-40',
        halfLife: "39373200000000000000000000",
        isAlpha: false,
        description: 'Природный радиоактивный изотоп калия, составляющий около 0,012% природного калия. Он содержится в почве, продуктах питания и организме человека, где является одним из источников естественного фонового излучения; активность калия-40 в теле человека составляет примерно 4400 Бк.',
        videoUrl: '7c9e6679-3b1a-4d2f-89bc-318492000002.mp4',
        imageUrl: 'd52f6c9d-4e2b-4a1c-901d-528493000002.jpg',
        status: IsotopeStatus.Published,
        authorId: 1
    },
    {
        id: 3,
        name: 'Плутоний-240',
        halfLife: "207070776000000000000",
        isAlpha: true,
        description: 'Радиоактивный изотоп плутония, образующийся как примесь при производстве плутония-239. Его повышенная вероятность спонтанного деления создаёт значительный поток нейтронов, поэтому плутоний с большим содержанием Pu-240 непригоден для оружия взрывного типа и требует особого обращения.',
        videoUrl: '3b241101-1a2b-4c3d-8e4f-567890000003.mp4',
        imageUrl: '9a6d0932-9b8c-4a7d-8e6f-123456000003.png',
        status: IsotopeStatus.Published,
        authorId: 1
    },
    {
        id: 4,
        name: 'Радий-226',
        halfLife: "50492160000000000000",
        isAlpha: true,
        description: 'Природный радиоактивный изотоп радия, открытый Марией и Пьером Кюри в 1898 году. Ранее применялся в светящихся красках, включая краски марки Undark, а сегодня представляет интерес как источник радона и важный элемент радиоактивного семейства урана-238.',
        videoUrl: '0e334a12-8d7c-4b69-a1b2-c3d4e5000004.mp4',
        imageUrl: '8d7c4b69-0e33-4a12-b2c3-d4e5f6000004.jpg',
        status: IsotopeStatus.Deleted,
        authorId: 1
    },
    {
        id: 5,
        name: 'Актиний-227',
        halfLife: "686940864000000000",
        isAlpha: true,
        description: 'Радиоактивный изотоп актиния, давший название актиниевому ряду распада. Он преимущественно распадается по β-каналу — около 98,6% превращений приводит к образованию тория-227, тогда как небольшая доля распадов происходит по α-каналу с образованием франция-223.',
        videoUrl: 'c8e76a14-f47a-4c10-b1a2-345678000005.mp4',
        imageUrl: 'f47ac10b-c8e7-4a14-a2b3-c4d5e6000005.jpeg',
        status: IsotopeStatus.Draft,
        authorId: 1
    },
    {
        id: 6,
        name: 'Ксенон-133',
        halfLife: "452736000000000",
        isAlpha: false,
        description: 'Радиоактивный продукт деления урана и плутония, образующийся в ядерных реакторах и при ядерных авариях. Ксенон-133 выбрасывался в атмосферу после Чернобыльской аварии, а его свойства используются в ядерной медицине и пульмонологии для исследования вентиляции лёгких.',
        videoUrl: '6c905581-2d9d-4150-a2b3-c4d5e6000006.mp4',
        imageUrl: '2d9d1502-6c90-4558-b1c2-d3e4f5000006.jpg',
        status: IsotopeStatus.Published,
        authorId: 1
    },
    {
        id: 7,
        name: 'Полоний-218',
        isAlpha: true,
        halfLife: "186000000000",
        description: 'Короткоживущий радиоактивный изотоп и первый твёрдый продукт распада радона-222. Он оседает на частицах пыли и различных поверхностях в помещении, после чего может попадать в дыхательные пути и облучать лёгкие альфа-частицами.',
        videoUrl: 'e3d7454f-1b9d-4bcd-8e9f-012345000007.mp4',
        imageUrl: '1b9d6bcd-e3d7-454f-a9b8-c7d6e5000007.jpg',
        status: IsotopeStatus.Published,
        authorId: 1
    }
];

export const LIKE = [
    { id: 1, userId: 1, isotopeId: 1 },
    { id: 2, userId: 1, isotopeId: 3 },
    { id: 3, userId: 2, isotopeId: 3 },
    { id: 4, userId: 2, isotopeId: 4 }
];

export type MockIsotopeDTO = IsotopeDTO & { status: IsotopeStatus };

const NANOSECONDS_PER_SECOND = 1_000_000_000n;
const SECONDS_PER_YEAR = 31_556_952n;

const TIME_UNITS = [
    { label: 'млрд. л.', nanoseconds: SECONDS_PER_YEAR * 1_000_000_000n * NANOSECONDS_PER_SECOND },
    { label: 'млн. л.', nanoseconds: SECONDS_PER_YEAR * 1_000_000n * NANOSECONDS_PER_SECOND },
    { label: 'тыс. л.', nanoseconds: SECONDS_PER_YEAR * 1_000n * NANOSECONDS_PER_SECOND },
    { label: 'л.', nanoseconds: SECONDS_PER_YEAR * NANOSECONDS_PER_SECOND },
    { label: 'д.', nanoseconds: 86_400n * NANOSECONDS_PER_SECOND },
    { label: 'ч.', nanoseconds: 3_600n * NANOSECONDS_PER_SECOND },
    { label: 'мин.', nanoseconds: 60n * NANOSECONDS_PER_SECOND },
    { label: 'сек.', nanoseconds: NANOSECONDS_PER_SECOND },
    { label: 'мс.', nanoseconds: 1_000_000n },
    { label: 'мкс.', nanoseconds: 1_000n },
    { label: 'нс.', nanoseconds: 1n },
];

function formatHalfLife(value: string | null): string {
    if (value === null) return 'неизвестно';

    const nanoseconds = BigInt(value);
    const unit = TIME_UNITS.find(({ nanoseconds: unitSize }) => nanoseconds >= unitSize);

    if (!unit) return `${value} нс.`;

    const integerPart = nanoseconds / unit.nanoseconds;
    const remainder = nanoseconds % unit.nanoseconds;
    const fractionalPart = (remainder * 100n) / unit.nanoseconds;

    if (fractionalPart === 0n) return `${integerPart} ${unit.label}`;

    const fraction = fractionalPart
        .toString()
        .padStart(2, '0')
        .replace(/0+$/, '');

    return `${integerPart}.${fraction} ${unit.label}`;
}

export function createIsotopeDTOs(): Record<number, MockIsotopeDTO> {
    const result: Record<number, MockIsotopeDTO> = {};

    for (const isotope of ISOTOPE) {
        const halfLife = isotope.halfLife ?? null;

        result[isotope.id] = {
            id: isotope.id,
            name: isotope.name,
            description: isotope.description ?? null,
            imageUrl: isotope.imageUrl ?? null,
            videoUrl: isotope.videoUrl ?? null,
            halfLife,
            halfLifeFormatted: formatHalfLife(halfLife),
            isAlpha: isotope.isAlpha ?? null,
            likeCount: LIKE.filter(like => like.isotopeId === isotope.id).length,
            isLiked: false,
            isAuthor: false,
            status: isotope.status,
        };
    }

    return result;
}

export const ISOTOPE_DTOS = createIsotopeDTOs();
