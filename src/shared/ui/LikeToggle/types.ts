export type LikeToggleProps = {
    isLiked: boolean;
    likeCount: number;
    isHorizontal?: boolean;
    className?: string;
    onToggle: () => Promise<void> | void;
}
