import React from 'react'
import styled from 'styled-components'

function Viewbox() {
    const WrapDiv = styled.div`
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
    const ContentP = styled.p`
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
    return (
        <WrapDiv>
            <ContentP>
                <span>DISCOVER YOUR FAVORITES</span>
                <span>WITH CREATOR, BY CURATOR, FROM BRAND</span>
            </ContentP>
        </WrapDiv>
    )
}
export default Viewbox
