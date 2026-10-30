import { FallbackImage } from "@/shared/ui/FallbackImage/FallbackImage";
import type { IsotopeCardProps } from "./types";
import LikeToggle from "@/shared/ui/LikeToggle/LikeToggle";
import { useState } from "react";

export default function IsotopeCard({
    id,
    name,
    halfLifeFormatted,
    imageUrl,
    likeCount,
    isLiked,
    isAuthor,
}: IsotopeCardProps) {
    const deleteActionUrl = `/isotopes/${id}/delete`;
    const homeRedirectUrl = `/isotopes/home/${id}`;

    const [liked, setLiked] = useState(isLiked);
    const [count, setCount] = useState(likeCount);

    async function handleLikeClick() {
        const nextLiked = !liked;

        setLiked(nextLiked);
        setCount(count + (nextLiked ? 1 : -1));
    }

    return (
        <div className="isotope-card">
            {isAuthor && (
                <form action={deleteActionUrl} method="post">
                    <button type="submit" className="isotope-card__delete">
                        <img src="/icons/bin.svg" className="isotope-card__delete-icon" />
                    </button>
                </form>
            )}

            <a href={homeRedirectUrl} className="isotope-card__link isotope-card__link--image">
                <FallbackImage
                    src={imageUrl}
                    fallbackSrc="/assets/isotope.png"
                    alt={name}
                    className="isotope-card__image"
                />
            </a>
            <div className="isotope-card__content">
                <LikeToggle
                    className="isotope-card__like"
                    isLiked={liked}
                    likeCount={count}
                    isHorizontal={true}
                    onToggle={handleLikeClick}
                />

                <a href={homeRedirectUrl} className="isotope-card__link isotope-card__link--name">
                    <h3 className="isotope-card__name">{name}</h3>
                </a>
                <p className="isotope-card__half-life">T½: {halfLifeFormatted}</p>
            </div>
        </div>
    );
}
