import type { VideoHTMLAttributes } from "react";

export type FallbackVideoProps = {
    src: string | null;
    fallbackSrc: string;
    className?: string;
} & Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src' | 'className' | 'onError'>;
