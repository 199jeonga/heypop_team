const mediaquery: { [key: string]: string } = {
    mobile: `(max-width: 720px)`,
    tablet: `(min-width:720px) and (max-width: 1024px)`,
    laptop: `(min-width:1024px) and (max-width: 1440px)`,
    pcpull: `(min-width: 1440px)`,
}
const colors: { [key: string]: string } = {
    color_black: '#000',
    color_white: '#fff',
    color_gray: '#999',
    color_point: '#FF4E00',
}

export const theme = {
    colors,
    mediaquery,
}

export type Theme = typeof theme
