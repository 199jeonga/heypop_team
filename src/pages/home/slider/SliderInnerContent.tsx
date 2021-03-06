import React from 'react'
import styled from 'styled-components'

const WrapDiv = styled.div`
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 94px;
    bottom: 60px;
    h2 {
        width: 100%;
        height: auto;
        line-height: 160%;
        font-size: 36px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
    }
    p {
        width: 100%;
        height: auto;
        line-height: 1.7rem;
        font-size: 18px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
    }
`
function SliderInnerContent({ title, subtitle }: any) {
    return (
        <WrapDiv>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </WrapDiv>
    )
}

export default SliderInnerContent
