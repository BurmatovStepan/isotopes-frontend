import type { IsotopeView } from "../../types";

export type IsotopeCardProps = Pick<
    IsotopeView,
    "id" |
    "name" |
    "halfLifeFormatted" |
    "imageUrl" |
    "likeCount" |
    "isLiked" |
    "isAuthor"
>;
