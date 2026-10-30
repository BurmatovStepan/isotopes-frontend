export type LikeToggleProps = {
    isLiked: boolean;
    likeCount: number;
    isHorizontal: boolean;
    className?: string | undefined;
    onToggle: () => Promise<void> | void;
}
