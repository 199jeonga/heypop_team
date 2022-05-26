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
const LogoDiv = styled.div`
    float: left;
    width: 80px;
    height: 100%;
    padding: 23px 1px;
    background-color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.media.mob} {
        width: auto;
        height: auto;
        padding: 12px 10px;
    }
    img {
        width: 44px;
        height: auto;
        ${({ theme }) => theme.styles.center}
        filter: invert(100%) sepia(0%) saturate(7478%) hue-rotate(191deg)
            brightness(400%) contrast(100%);
        ${({ theme }) => theme.media.mob} {
            width: 30px;
        }
    }
`
const TextDiv = styled.div`
    float: left;
    width: auto;
    height: auto;
    padding: 23px 28px;
    font-size: 36px;
    font-weight: 800;
    background-color: ${({ theme }) => theme.colors.point};
    ${({ theme }) => theme.media.mob} {
        font-size: 24px;
        padding: 13px 15px 12px;
    }
`
function SliderInnerLabel() {
    return (
        <WrapDiv>
            <LogoDiv>
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo.svg`}
                    alt="lorem asdf"
                />
            </LogoDiv>
            <TextDiv>Living</TextDiv>
        </WrapDiv>
    )
}

export default SliderInnerLabel
