import './style.scss';

import { useState } from 'react';
import { Link } from 'react-router';

import { FallbackImage } from '@/shared/ui/FallbackImage/FallbackImage';
import LikeToggle from '@/shared/ui/LikeToggle/LikeToggle';

import type { IsotopeCardProps } from "./types";
export default function IsotopeCard({
    id,
    name,
    halfLifeFormatted,
    imageUrl,
    likeCount,
    isLiked,
    isAuthor,
}: IsotopeCardProps) {
    const [likeState, setLikeState] = useState({
        liked: isLiked,
        count: likeCount,
    });

    async function handleLikeClick() {
        setLikeState(previous => {
            return {
                liked: !previous.liked,
                count: previous.count + (previous.liked ? -1 : 1)
            };
        });
    }

    return (
        <div className="isotope-card">
            {isAuthor && (
                <form action={`/isotopes/${id}/delete`} method="post">
                    <button type="submit" className="isotope-card__delete">
                        <img src="/icons/bin.svg" className="isotope-card__delete-icon" />
                    </button>
                </form>
            )}

            <Link to={`/isotopes/feed/${id}`} className="isotope-card__link isotope-card__link--image">
                <FallbackImage
                    src={imageUrl}
                    fallbackSrc="/assets/isotope.png"
                    className="isotope-card__image"
                />
            </Link>
            <div className="isotope-card__content">
                <LikeToggle
                    className="isotope-card__like"
                    isLiked={likeState.liked}
                    likeCount={likeState.count}
                    isHorizontal={true}
                    onToggle={handleLikeClick}
                />

                <Link to={`/isotopes/feed/${id}`} className="isotope-card__link isotope-card__link--name">
                    <h3 className="isotope-card__name">{name}</h3>
                </Link>
                <p className="isotope-card__half-life">T½: {halfLifeFormatted.full}</p>
            </div>
        </div>
    );
}
