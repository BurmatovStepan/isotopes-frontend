import './style.scss';

import { useState } from 'react';
import { Link } from 'react-router';

import { FallbackVideo } from '@/shared/ui/FallbackVideo/FallbackVideo';
import LikeToggle from '@/shared/ui/LikeToggle/LikeToggle';
import { makeClassString } from '@/shared/utils/makeClassString';

import type { FeedPageProps } from "./types";
export default function FeedPage({
    isotope,
}: FeedPageProps) {
    const [likeState, setLikeState] = useState({
        liked: isotope.isLiked,
        count: isotope.likeCount,
    });

    async function handleLikeClick() {
        setLikeState(previous => {
            return {
                liked: !previous.liked,
                count: previous.count + (previous.liked ? -1 : 1)
            };
        });
    }
    return (<>
        <FallbackVideo
            src={isotope.videoUrl}
            fallbackSrc="/assets/isotope.mp4"
            className="isotope-page__video"
            autoPlay={true}
            loop={true}
            muted={true}
        />

        <div className="isotope-page__overlay">
        </div>

        <div className="isotope-page__content">
            <div className="isotope-page__meta meta">
                <LikeToggle
                    className="meta__like"
                    isLiked={likeState.liked}
                    likeCount={likeState.count}
                    onToggle={handleLikeClick}
                />

                <div className={makeClassString(
                    'property-display',
                    'isotope-page__radiation-type',
                    'radiation-type',
                    isotope.isAlpha && 'radiation-type--alpha',
                )}>
                    <img src="/icons/alpha.svg" className="property-display__label-icon" />
                    <div className="property-display__value radiation-type__value">
                        <img src={isotope.isAlpha ? '/icons/check.svg' : '/icons/cross.svg'} />
                    </div>
                </div>

                <div className={makeClassString(
                    "property-display",
                    "isotope-page__half-life",
                    'half-life',
                )} title={isotope.halfLifeFormatted.full}>
                    <div className="property-display__label">T½</div>
                    <div className="property-display__value half-life__value">{isotope.halfLifeFormatted.compact}</div>
                </div>

                <Link to={`/isotopes/feed/${isotope.id}?next=true`} className="meta__next next-button">
                    <img src="/icons/chevrons-right.svg" className="next-button__icon" />
                </Link>
            </div>

            <div className="isotope-page__info">
                <h1 className="isotope-page__name">{isotope.name}</h1>

                <div className="isotope-page__description description">
                    <p className="description__content">{isotope.description}</p>

                    <label className="description__action">
                        <input type="checkbox" className="description__toggle" />

                        <div className="description__more">Подробнее</div>
                        <div className="description__less">Скрыть</div>
                    </label>
                </div>
            </div>
        </div >
    </>)
}
