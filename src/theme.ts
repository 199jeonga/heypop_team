// e.g -> ${({ theme }) => theme.media.mob} {}

// responsive
const media: { [key: string]: string } = {
    mob: `@media screen and (max-width: 720px)`,
    tab: `@media screen and (min-width:719px) and (max-width: 1024px)`,
    lap: `@media screen and (min-width:1023px) and (max-width: 1440px)`,
    pc: `@media screen and (min-width: 1439px)`,
}

// color외 자주 사용할 코드
const styles: { [key: string]: string } = {
    center: 'margin-left: 50%;  transform: translateX(-50%);',
}

// 색상 변수
const colors: { [key: string]: string } = {
    black: '#000',
    white: '#fff',
    gray: '#999',
    point: '#FF4E00',
}

export const theme = {
    colors,
    media,
    styles,
}

export type Theme = typeof theme
