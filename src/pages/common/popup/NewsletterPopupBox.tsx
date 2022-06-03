import React from 'react'
import styled from 'styled-components'

function NewsletterPopupBox() {
    const NewsletterPopupArea = styled.div`
        position: fixed;
        max-width: 840px;
        z-index: 50010;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
        background: #000;
        display: flex;
        justify-content: space-between;
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
            max-width: 360px;
            height: auto;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -10px;
            margin-left: -10px;
            padding: 25px 20px;
        }
    `
    const NewsletterPopupInnerDiv = styled.div`
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 10px;
        padding-left: 10px;
        flex: 0 0 41%;
        max-width: 41%;
        ${({ theme }) => theme.media.mob} {
            flex: 0 0 100%;
            max-width: 100%;
        }
        h3 {
            font-size: 60px;
            color: #fff;
            text-transform: capitalize;
            line-height: 0.95;
            ${({ theme }) => theme.media.mob} {
                ${({ theme }) => theme.styles.displayNone}
            }
        }
        p {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            margin-top: 25px;
            line-height: 1.5;
            margin-bottom: 20px;
        }
    `
    const InputLabelDiv = styled.div`
        display: block;
        font-size: 14px;
        line-height: 1;
        font-weight: 500;
        color: #666;
        margin-bottom: 10px;
    `
    const TextInput = styled.input`
        height: 48px;
        width: 100%;
        border: none;
        background: #f8f8f8;
        color: #999;
        padding: 10px 20px;
        box-sizing: border-box;
        margin-bottom: 6px;
        font-size: 16px;
        margin-bottom: 20px;
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #c1bfbf;
            font-weight: bold;
        }
        :-ms-input-placeholder {
            color: #c1bfbf;
            font-weight: bold;
        }
    `
    const CheckAreaLabel = styled.label`
        position: relative;
        display: block;
        margin-bottom: 0;
        font-size: 13px;
        color: #666;
        margin-bottom: 5px;
        word-break: keep-all;
        padding: 0;
        line-height: 160%;
        a {
            text-decoration: none;
            font-size: 13px;
            color: #666;
            border-bottom: 1px solid #666;
        }
    `
    const SubscriptionButton = styled.button`
        height: 54px;
        background: ${({ theme }) => theme.colors.point};
        color: #fff;
        border: none;
        margin-top: 25px;
        width: 100%;
        font-size: 15px;
        font-weight: bold;
    `
    return (
        <NewsletterPopupArea>
            <NewsletterPopupInnerDiv>
                <h3>Discover Your Favorites</h3>
                <p>
                    매주 목요일 오전 9시,
                    <br />
                    헤이팝이 찾아갑니다.
                </p>
            </NewsletterPopupInnerDiv>
            <NewsletterPopupInnerDiv>
                <InputLabelDiv>이름</InputLabelDiv>
                <TextInput type="input" placeholder="Your Name" />
                <InputLabelDiv>이메일 주소</InputLabelDiv>
                <TextInput type="email" placeholder="email@email.com" />
                <div>
                    <CheckAreaLabel htmlFor="privacyCheck">
                        <input id="privacyCheck" type="checkbox" />
                        <span>
                            <a href="/newsletter-privacy" target="_blank">
                                개인정보 수집 및 이용약관
                            </a>
                            에 동의합니다.
                        </span>
                    </CheckAreaLabel>
                    <CheckAreaLabel htmlFor="ageCheck">
                        <input id="ageCheck" type="checkbox" />
                        <span className="checkbox-text">
                            만 14세 이상임을 확인하고 동의합니다.
                        </span>
                    </CheckAreaLabel>
                    <div>
                        <SubscriptionButton type="button">
                            뉴스레터 구독
                        </SubscriptionButton>
                    </div>
                </div>
            </NewsletterPopupInnerDiv>
        </NewsletterPopupArea>
    )
}

export default NewsletterPopupBox
