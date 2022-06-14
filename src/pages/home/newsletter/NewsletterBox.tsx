import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundBlurBox from '../../common/style/BackgroundBlurBox'
import NewsletterPopupBox from '../../common/popup/NewsletterPopupBox'

function NewsletterBox() {
    const NewsLetterArea = styled.div`
        max-width: 1440px;
        width: 100%;
        height: 100%;
        padding-top: 160px;
        padding-right: 130px;
        padding-left: 130px;
        margin-right: auto;
        margin-left: auto;
        ${({ theme }) => theme.media.mob} {
            padding: 10px 0 80px 0;
        }
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
        ${({ theme }) => theme.media.tab} {
            background-size: 65%;
            background-position-x: 0;
            background-position-y: 0;
            margin-top: 0;
        }
        ${({ theme }) => theme.media.mob} {
            background-size: 75%;
            background-position: center top;
            padding-left: 0;
            margin-right: 0;
            margin-left: 0;
        }
    `
    const NewsLetterContentDiv = styled.div`
        width: auto;
        ${({ theme }) => theme.media.tab} {
            margin-top: 520px;
            width: 340px;
        }
        h3 {
            text-align: left;
            font-weight: 900;
            margin-top: -50px;
            text-transform: capitalize;
            font-size: 36px;
            line-height: 150%;
            ${({ theme }) => theme.media.mob} {
                margin-top: 60.5%;
                padding: 70px 12.5% 0;
                font-size: 20px;
            }
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
            ${({ theme }) => theme.media.tab} {
                padding-right: 0;
                width: 340px;
            }
            ${({ theme }) => theme.media.mob} {
                padding: 0 12.5%;
                margin-top: 20px;
                font-size: 14px;
            }
        }
    `
    const NewsButtonDiv = styled.div`
        text-align: right;
        font-size: 16px;
        list-style: none;
        font-weight: 400;
        word-break: keep-all;
        padding: 0;
        line-height: 160%;
        color: ${({ theme }) => theme.colors.white};
        outline: 0;
        margin-bottom: 316px;
        ${({ theme }) => theme.media.tab} {
            margin-bottom: 150px;
        }
        ${({ theme }) => theme.media.mob} {
            width: 75%;
            margin-left: 12.5%;
            margin-bottom: 0;
        }
    `
    const NewsletterTriggerDiv = styled.div`
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        font-weight: 700;
        padding: 15px 20px;
        margin-right: 30px;
        display: inline-block;
        cursor: pointer;
        ${({ theme }) => theme.media.mob} {
            margin-right: 0;
            display: block;
            text-align: center;
        }
    `
    const CloseDiv = styled.div`
        position: absolute;
        z-index: 31000;
        top: -50px;
        right: 0px;
        display: block;
        width: 36px;
        height: 36px;
        cursor: pointer;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        -o-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        img {
            max-width: 100%;
            width: 100%;
        }
    `
    const NewsletterInnerDiv = styled.div`
        z-index: 50000;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
        background: #000;
        width: 840px;
        max-width: 840px;
        height: 405px;
        margin-top: -200px;
        padding: 45px 40px 50px 40px;
        ${({ theme }) => theme.media.tab} {
            max-width: 640px;
            max-width: 640px;
            height: 450px;
            margin-top: -225px;
            padding: 35px 30px;
        }
        ${({ theme }) => theme.media.mob} {
            max-width: 335px;
            height: 400px;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -10px;
            margin-left: -10px;
        }
    `
    const [showNewsletterPopupBox, setNewsletterPopupBox] = useState(false)
    const newsletterPopupToggle = () =>
        setNewsletterPopupBox(!showNewsletterPopupBox)
    return (
        <NewsLetterArea>
            {showNewsletterPopupBox && <BackgroundBlurBox />}
            {showNewsletterPopupBox && (
                <NewsletterInnerDiv>
                    <CloseDiv
                        role="none"
                        onClick={newsletterPopupToggle}
                        onKeyDown={newsletterPopupToggle}
                    >
                        <img
                            src="https://storage.oneslist.com/assets/2021/11/19161050/icon_modal_close.png"
                            alt="close"
                        />
                    </CloseDiv>
                    <NewsletterPopupBox />
                </NewsletterInnerDiv>
            )}
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
                            <span
                                role="none"
                                onClick={newsletterPopupToggle}
                                onKeyDown={newsletterPopupToggle}
                            >
                                뉴스레터 구독하기
                            </span>
                        </NewsletterTriggerDiv>
                    </NewsButtonDiv>
                </NewsLetterContentDiv>
            </NewsLetterInnerDiv>
        </NewsLetterArea>
    )
}
export default NewsletterBox
