export const IsotopeStatus = {
    Draft: 0,
    Published: 1,
    Deleted: 2,
} as const;

export type IsotopeStatus =
    (typeof IsotopeStatus)[keyof typeof IsotopeStatus];


export type IsotopeView = {
    id: number;
    name: string;
    description: string | null;
    imageUrl: string | null;
    videoUrl: string | null;
    halfLife: bigint | null;
    halfLifeFormatted: {
        compact: string;
        full: string;
    };
    isAlpha: boolean | null;

    likeCount: number;
    isLiked: boolean;
    isAuthor: boolean;
}
