import React from 'react'
import styled from 'styled-components'

function NewsLetter() {
    const NewsLetterArea = styled.div`
        max-width: 1440px;
        width: 100%;
        height: 100%;
        padding-top: 160px;
        padding-right: 130px;
        padding-left: 130px;
        margin-right: auto;
        margin-left: auto;
    `
    const NewsLetterInnerDiv = styled.div`
        padding-left: 60%;
        height: 100%;
        background-image: url(https://storage.oneslist.com/assets/2021/11/12171535/Logo-2.svg);
        background-repeat: no-repeat;
        margin-top: 50px;
        background-size: 62.5% auto;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -10px;
        margin-left: -10px;
    `
    const NewsLetterContentDiv = styled.div`
        width: auto;
        h3 {
            text-align: left;
            font-weight: 900;
            margin-top: -50px;
            text-transform: capitalize;
            font-size: 36px;
            line-height: 150%;
        }
        p {
            font-size: 18px;
            font-weight: 700;
            margin-top: 60px;
            text-align: left;
            margin-bottom: 60px;
            padding-right: 30px;
            word-break: keep-all;
            line-height: 160%;
        }
    `
    const NewsButtonDiv = styled.div`
        text-align: right;
        margin-bottom: 316px;
        font-size: 16px;
        list-style: none;
        font-weight: 400;
        word-break: keep-all;
        padding: 0;
        line-height: 160%;
        color: #000;
        outline: 0;
    `
    const NewsletterTriggerDiv = styled.div`
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;
        padding: 15px 20px;
        margin-right: 30px;
        display: inline-block;
        cursor: pointer;
    `
    return (
        <NewsLetterArea>
            <NewsLetterInnerDiv>
                <NewsLetterContentDiv>
                    <h3>
                        매일의 새로움, <br />
                        세상의 모든 팝업 <br />
                        헤이팝
                    </h3>
                    <p>
                        팝업 큐레이션 플랫폼, 헤이팝은 변화하는 시대에도 문화와
                        예술을 향한 갈망이 식지 않는 여러분들을 위해
                        태어났습니다. 헤이팝과 함께 좋아하는 브랜드의 새로운
                        도전에 기꺼이 참여하고, 사랑하는 아티스트의 작업실에
                        성큼 발을 들이고 싶은 능동적 취향 탐험가가 되어보세요!
                    </p>
                    <NewsButtonDiv>
                        <NewsletterTriggerDiv>
                            뉴스레터 구독하기
                        </NewsletterTriggerDiv>
                    </NewsButtonDiv>
                </NewsLetterContentDiv>
            </NewsLetterInnerDiv>
        </NewsLetterArea>
    )
}
export default NewsLetter
