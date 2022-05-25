import React from 'react'
import styled from 'styled-components'

const WrapSection = styled.section`
    position: relative;
    width: 100%;
    height: 642px;
    background-color: rgba(0, 0, 0, 0.2);
`
const BackgroundDiv = styled.div`
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
const ContentDiv = styled.div`
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
function SliderArea() {
    return (
        <WrapSection>
            <BackgroundDiv>
                <div>백그라운드</div>
                <div>이미지</div>
            </BackgroundDiv>
            <ContentDiv>
                <h2>제목입니다제목입니다제목</h2>
                <p>내용입니다내용입니다내용입니다내용입니다내용</p>
            </ContentDiv>
        </WrapSection>
    )
}
export default SliderArea
