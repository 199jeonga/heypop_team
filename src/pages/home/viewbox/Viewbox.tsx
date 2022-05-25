import React from 'react'
import styled from 'styled-components'

function Viewbox() {
    const StyledDiv = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 28vw;
        padding-top: 55px;
        max-height: 300px;
        max-width: 1180px;
        ${({ theme }) => theme.styles.center}
        ${({ theme }) => theme.media.lap} {
            padding: 55px 130px 0;
        }
        ${({ theme }) => theme.media.tab} {
            padding: 55px 90px 0;
        }
        ${({ theme }) => theme.media.mob} {
            display: block;
            max-height: none;
            height: auto;
            padding: 50px 0 50px;
        }
    `
    const StyledP = styled.p`
        width: 100%;
        height: 25px;
        line-height: 25px;
        font-weight: 900;
        ${({ theme }) => theme.media.mob} {
            height: auto;
            text-align: center;
            margin-bottom: 50px;
        }
        span {
            display: block;
            width: 100%;
            font-size: 18px;
        }
        & span:first-child {
            color: ${({ theme }) => theme.colors.point};
        }
        & span:last-child {
            color: ${({ theme }) => theme.colors.black};
        }
    `
    const StyledDivImg = styled.div`
        width: auto;
        height: auto;
        ${({ theme }) => theme.media.mob} {
            display: flex;
            justify-content: center;
        }
        img {
            width: auto;
            max-width: 360px;
            height: auto;
            padding-left: 20px;
            ${({ theme }) => theme.media.tab} {
                width: ${({ theme }) => theme.vwTab(340)};
            }
            ${({ theme }) => theme.media.mob} {
                width: ${({ theme }) => theme.vwMob(340)};
            }
        }
    `

    return (
        <StyledDiv>
            <StyledP>
                <span>DISCOVER YOUR FAVORITES</span>
                <span>WITH CREATOR, BY CURATOR, FROM BRAND</span>
            </StyledP>
            <StyledDivImg>
                <img
                    src="https://storage.oneslist.com/assets/2021/11/12171535/Logo-2.svg"
                    alt="heypop"
                />
            </StyledDivImg>
        </StyledDiv>
    )
}
export default Viewbox
