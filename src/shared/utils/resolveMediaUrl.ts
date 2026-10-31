const BASE_MEDIA_URL = ''

export const resolveMediaUrl = (path: string) => {
    return `${BASE_MEDIA_URL}/assets/${path}`;
}
