import React from 'react'
import styled from 'styled-components'

interface Iprops {
    text: string
}

const TitleH3 = styled.h3`
    width: 100%;
    font-weight: 700;
    padding-bottom: 47px;
    font-size: 36px;
    line-height: 150%;
    ${({ theme }) => theme.media.tab} {
        padding-bottom: 15px;
        text-indent: 45px;
    }
    ${({ theme }) => theme.media.mob} {
        padding-bottom: 20px;
        text-align: center;
    }
    ${({ theme }) => theme.media.minTab} {
        font-size: 24px;
    }
`
function SliderAreaH3({ text }: Iprops) {
    return <TitleH3>{text}</TitleH3>
}
export default SliderAreaH3
