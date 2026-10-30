import type { LikeToggleProps } from './types';

export default function LikeToggle({
    isLiked,
    likeCount,
    isHorizontal = false,
    className = '',
    onToggle,
}: LikeToggleProps) {
    const classes = [
        'like',
        isLiked && 'like--active',
        isHorizontal && 'like--horizontal',
        className,
    ]
        .filter(Boolean)
        .join(' ');
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
