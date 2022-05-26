import React from 'react'
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
            rgba(0, 0, 0, 0.3) 100%
        );
    }
    & div:last-child {
        width: 100%;
        height: 100%;
        ${({ theme }) => theme.media.maxTab} {
            background-image: url('https://storage.heypop.kr/assets/2022/05/19121828/1-main.jpg');
        }
        ${({ theme }) => theme.media.minTab} {
            background-image: url('https://storage.heypop.kr/assets/2022/05/19121830/1-main_M.jpg');
        }
        background-repeat: no-repeat;
        background-size: cover;
    }
`
function SliderInnerBackground() {
    return (
        <WrapDiv>
            <div>백그라운드</div>
            <div>이미지</div>
        </WrapDiv>
    )
}

export default SliderInnerBackground
