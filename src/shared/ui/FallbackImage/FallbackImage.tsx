import { useState } from 'react';

import type { FallbackImageProps } from "./types";

export function FallbackImage({
    src,
    fallbackSrc,
    alt,
    className,
}: FallbackImageProps) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null);
    const showFallback = !src || failedSrc === src;

    return (
        <img
            src={showFallback ? fallbackSrc : src}
            alt={alt}
            className={className}
            onError={() => {
                if (src && !showFallback) {
                    setFailedSrc(src)
                };
            }}
        />
    );
}
