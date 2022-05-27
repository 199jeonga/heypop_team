// e.g -> ${({ theme }) => theme.media.mob} {}
// 반응형을 위한 vwUnit 계산 함수를 만들어 봤습니다. 아래와 같이 사용하시면 됩니다!
// function e.g -> ${({ theme }) => theme.vwMob(100)};

// size
const size: { [key: string]: number } = {
    mob: 720,
    tab: 1024,
    lap: 1440,
}

// vw unit
const vwMob = (objSize: number) => `${(objSize / size.mob) * 100}vw;`
const vwTab = (objSize: number) => `${(objSize / size.tab) * 100}vw;`
const vwLap = (objSize: number) => `${(objSize / size.lap) * 100}vw;`

// responsive
const media: { [key: string]: string } = {
    mob: `@media screen and (max-width: ${size.mob - 1}px)`,
    tab: `@media screen and (min-width:${size.mob}px) and (max-width: ${
        size.tab - 1
    }px)`,
    lap: `@media screen and (min-width:${size.tab}px) and (max-width: ${
        size.lap - 1
    }px)`,
    pc: `@media screen and (min-width: ${size.lap}px)`,
    maxHeader: `@media screen and (min-width: ${size.lap}px)`,
    minHeader: `@media screen and (max-width: ${size.lap - 1}px)`,
    maxTab: `@media screen and (min-width: ${size.tab}px)`,
    minTab: `@media screen and (max-width: ${size.tab - 1}px)`,
    maxMob: `@media screen and (min-width: ${size.mob}px)`,
    minMob: `@media screen and (max-width: ${size.mob - 1}px)`,
}

// style 적용 시 반복적으로 사용하는 코드
const styles: { [key: string]: string } = {
    center: 'margin:0 auto;',
    centerPositon:
        'position: absolute; transform: translateX(-50%); margin-left: 50%;',
    blind: 'border: 0; clip: rect(0 0 0 0); clip-path: inset(50%); width: 1px; height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; white-space: nowrap;',
    displayNone:
        'display: block; width: 0; height: 0; position: absolute; z-index:-1; overflow: hidden;',
    full: 'display:block; width:100%; height:100%;',
}

// 색상 변수
const colors: { [key: string]: string } = {
    black: '#000',
    white: '#fff',
    gray: '#999',
    point: '#FF4E00',
}

export const theme = {
    vwMob,
    vwTab,
    vwLap,
    colors,
    size,
    media,
    styles,
}

export type Theme = typeof theme
