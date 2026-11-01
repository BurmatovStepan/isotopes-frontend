import { useState } from 'react';

import type { FallbackVideoProps } from "./types";

export function FallbackVideo({
    src,
    fallbackSrc,
    className,
    ...videoProps
}: FallbackVideoProps) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null);
    const showFallback = !src || failedSrc === src;

    return (
        <video
            src={showFallback ? fallbackSrc : src}
            className={className}
            onError={() => {
                if (src && !showFallback) {
                    setFailedSrc(src)
                }
            }}
            {...videoProps}
        />
    )
}
