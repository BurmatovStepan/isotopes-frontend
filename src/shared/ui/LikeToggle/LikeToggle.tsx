import { makeClassString } from '@/shared/utils/makeClassString';

import type { LikeToggleProps } from './types';

export default function LikeToggle({
    isLiked,
    likeCount,
    isHorizontal = false,
    className = '',
    onToggle,
}: LikeToggleProps) {
    const classes = makeClassString(
        'like',
        isLiked && 'like--active',
        isHorizontal && 'like--horizontal',
        className,
    )

    return (
        <div className={classes}>
            <button
                type="button"
                className="like__button"
                onClick={onToggle}
            >
                <img
                    className="like__icon"
                    src={isLiked ? "/icons/heart-solid.svg" : "/icons/heart-outline.svg"}
                />
            </button>
            <span className='like__label'>{likeCount}</span>
        </div>
    )
}
