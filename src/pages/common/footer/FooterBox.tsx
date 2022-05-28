import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapDiv = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 0 130px;
    ${({ theme }) => theme.styles.center}
    margin-bottom: 77px;
    span,
    em {
        width: 100%;
        height: auto;
        font-size: 12px;
        font-weight: 400;
        word-break: keep-all;
        color: ${({ theme }) => theme.colors.gray};
    }
    ul {
        width: 100%;
        height: auto;
        text-align: center;
        line-height: 160%;
    }
    li {
        display: inline-block;
        padding: 0 6px;
    }
    em {
        margin-right: 4px;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray};
    }
`
const CopyrightDiv = styled.div`
    text-align: center;
    span {
        display: block;
        line-height: 160%;
    }
    span:first-child {
        width: 100%;
        height: auto;
        margin-bottom: 50px;
    }
`
const StyledLink = styled(Link)`
    width: 100%;
    height: auto;
    font-size: 12px;
    font-weight: 400;
    word-break: keep-all;
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
`
function FooterBox() {
    return (
        <WrapDiv>
            <CopyrightDiv>
                <span>© HEYPOP</span>
                <span>
                    헤이팝의 모든 콘텐츠는 저작권법의 보호를 받은 바, 무단 전재,
                    복사 및 배포 등을 금합니다.
                </span>
            </CopyrightDiv>
            <ul>
                <li>
                    <span>(주)디플릭</span>
                </li>
                <li>
                    <em>주소</em>
                    <span>서울시 중구 동호로 272 가동 5층</span>
                </li>
                <li>
                    <em>대표</em>
                    <span>이민형</span>
                </li>
                <li>
                    <em>사업자번호</em>
                    <span>637-87-01267</span>
                </li>
                <li>
                    <em>이메일</em>
                    <span>
                        <a href="mailto:heypop@design.co.kr" target="blank">
                            heypop@design.co.kr
                        </a>
                    </span>
                </li>
            </ul>
            <ul>
                <li>
                    <StyledLink to={`${process.env.PUBLIC_URL}/about`}>
                        서비스 소개
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to={`${process.env.PUBLIC_URL}/notice`}>
                        공지사항
                    </StyledLink>
                </li>
                <li>
                    <StyledLink
                        to={`${process.env.PUBLIC_URL}/terms-conditions`}
                    >
                        이용약관
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to={`${process.env.PUBLIC_URL}/privacy-policy`}>
                        개인정보처리방침
                    </StyledLink>
                </li>
            </ul>
        </WrapDiv>
    )
}
export default FooterBox
