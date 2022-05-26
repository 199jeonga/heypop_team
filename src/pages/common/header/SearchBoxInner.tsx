import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledDivBox = styled.div`
    width: 100%;
`
const StyledDivText = styled.ul`
    width: 100%;
    height: auto;
    margin: 20px 0 24px;
    ${({ theme }) => theme.media.mob} {
        margin: 10px 0 0;
    }
    h5 {
        width: 100%;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        ${({ theme }) => theme.media.mob} {
            ${({ theme }) => theme.styles.displayNone}
        }
    }
    span {
        width: 100%;
        height: auto;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.75rem;
        ${({ theme }) => theme.media.mob} {
            font-size: 14px;
        }
    }
    div {
        width: 100%;
        height: 24px;
        padding-bottom: 2px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.65rem;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    img {
        width: 100%;
    }
`
function SearchBoxInner() {
    return (
        <StyledDivBox>
            <StyledLink to="/">
                <img
                    src="https://storage.heypop.kr/assets/2022/05/11124119/ct2.jpg"
                    alt="성수 카페"
                />
            </StyledLink>
            <StyledDivText>
                <h5>
                    <StyledLink to="/">PLACE</StyledLink>
                </h5>
                <StyledLink to="/">
                    <span>성수에서 만난 작업하기 좋은 카페 5</span>
                </StyledLink>
            </StyledDivText>
        </StyledDivBox>
    )
}
export default SearchBoxInner
