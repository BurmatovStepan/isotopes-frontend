import { useState } from 'react';

import type { FallbackImageProps } from "./types";

export function FallbackImage({
    src,
    fallbackSrc,
    className,
    ...imageProps
}: FallbackImageProps) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null);
    const showFallback = !src || failedSrc === src;

    return (
        <img
            src={showFallback ? fallbackSrc : src}
            className={className}
            onError={() => {
                if (src && !showFallback) {
                    setFailedSrc(src)
                };
            }}
            {...imageProps}
        />
    );
}
