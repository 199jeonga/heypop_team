import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    & div:first-child {
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 0, 0, 0.4) 100%
        );
    }
`
const BackgoundDiv = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`
const BackgoundBigDiv = styled(BackgoundDiv)`
    ${({ theme }) => theme.media.maxTab} {
        display: block;
        background-repeat: no-repeat;
    }
`
const BackgoundMinDiv = styled(BackgoundDiv)`
    ${({ theme }) => theme.media.minTab} {
        display: block;
        background-repeat: no-repeat;
    }
`
const ImgLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
`
function SliderInnerBackground({ imgMin, imgBig, link }: any) {
    return (
        <WrapDiv>
            <div />
            <BackgoundBigDiv
                style={{
                    backgroundImage: `url(${imgBig})`,
                }}
            >
                <ImgLink to={link} />
            </BackgoundBigDiv>
            <BackgoundMinDiv
                style={{
                    backgroundImage: `url(${imgMin})`,
                }}
            />
        </WrapDiv>
    )
}

export default SliderInnerBackground
