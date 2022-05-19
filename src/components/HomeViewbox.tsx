import React from 'react'
import styled from 'styled-components'

function HomeViewbox() {
    const Hv = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 28vw;
        padding-top: 55px;
        max-height: 300px;
        max-width: 1440px;
        ${({ theme }) => theme.styles.center}
        ${({ theme }) => theme.media.lap} {
            padding: 55px 130px 0;
        }
        ${({ theme }) => theme.media.tab} {
            padding: 55px 90px 0;
        }
        ${({ theme }) => theme.media.mob} {
            max-height: none;
            display: block;
            height: auto;
            padding: 55px 0 0;
        }
    `
    const HvP = styled.p`
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
    const HvImg = styled.img`
        width: auto;
        max-width: 380px;
        height: auto;
        ${({ theme }) => theme.media.mob} {
            ${({ theme }) => theme.styles.center}
            width: 50.667vw;
        }
    `
    return (
        <Hv>
            <HvP>
                <span>DISCOVER YOUR FAVORITES</span>
                <span>WITH CREATOR, BY CURATOR, FROM BRAND</span>
            </HvP>
            <HvImg
                src="https://storage.oneslist.com/assets/2021/11/12171535/Logo-2.svg"
                alt="heypop"
            />
        </Hv>
    )
}
export default HomeViewbox
