import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDivBox = styled.div`
    width: 100%;
    img {
        width: 380px;
        height: auto;
        ${({ theme }) => theme.media.lap} {
            width: 96%;
            height: auto;
        }
        ${({ theme }) => theme.media.minTab} {
            width: 98%;
            height: auto;
        }
    }
`
const StyledDivText = styled.ul`
    width: 100%;
    height: auto;
    margin: 20px 0 24px;
    h5 {
        width: 100%;
        height: auto;
        line-height: 26px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
    }
    span {
        width: 100%;
        height: auto;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.75rem;
    }
    div {
        width: 100%;
        height: auto;
        padding-bottom: 2px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.65rem;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`
function SliderInner() {
    return (
        <StyledDivBox>
            <StyledLink to="/">
                <img
                    src="https://storage.heypop.kr/assets/2022/05/11112445/t-9.jpg?w=800&h=400&f=jpg&q=100"
                    alt="어쩌구"
                />
            </StyledLink>
            <StyledDivText>
                <h5>
                    <StyledLink to="/">카테고리 링크 연결</StyledLink>
                </h5>
                <StyledLink to="/">
                    <span>타이틀!!! 지정하기!!! 입니당</span>
                </StyledLink>
                <div>링크 없는 짧은 설명 ㅇ_ㅇ</div>
            </StyledDivText>
        </StyledDivBox>
    )
}
export default SliderInner
