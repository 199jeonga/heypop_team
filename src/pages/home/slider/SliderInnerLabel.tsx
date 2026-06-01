import React from 'react'
import styled from 'styled-components'

const WrapDiv = styled.div`
    ${({ theme }) => theme.styles.centerPositon}
    height: 80px;
    top: 40px;
    ${({ theme }) => theme.media.maxMob} {
        width: ${({ theme }) => theme.vwLap(1200)};
    }
    ${({ theme }) => theme.media.mob} {
        width: 100%;
        height: 24px;
        top: 0;
        margin-left: -50%;
        transform: translateX(50%);
    }
`
const TextDiv = styled.div`
    float: left;
    width: auto;
    height: auto;
    padding: 22px 28px;
    font-size: 36px;
    font-weight: 800;
    background-color: ${({ theme }) => theme.colors.point};
    ${({ theme }) => theme.media.mob} {
        font-size: 24px;
        padding: 13px 15px 12px;
    }
`
function SliderInnerLabel({ category }: any) {
    return (
        <WrapDiv>
            <TextDiv> {category} </TextDiv>
        </WrapDiv>
    )
}

export default SliderInnerLabel
