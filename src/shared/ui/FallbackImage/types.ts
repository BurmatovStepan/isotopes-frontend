import type { ImgHTMLAttributes } from "react";

export type FallbackImageProps = {
    src: string | null;
    fallbackSrc: string;
    className?: string;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'className' | 'onError'>;
