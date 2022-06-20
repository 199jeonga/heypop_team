import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeyPopPick from './SubPickHeypopPick'
import Closed from './SubClosed'

const WrapDiv = styled.div`
    position: relative;
    height: auto;
    padding-bottom: 60px;
    ${({ theme }) => theme.media.maxTab} {
        width: ${({ theme }) => theme.vwLap(518)};
        max-width: 518px;
    }
    img {
        width: 100%;
        height: auto;
        &:hover {
            transition: all 400ms ease;
            filter: opacity(0.7);
        }
    }
`
const PickDiv = styled.div`
    position: absolute;
    top: -30px;
    width: 100%;
    margin-bottom: 4px;
    ${({ theme }) => theme.media.minTab} {
        ${({ theme }) => theme.styles.blind}
    }
`
const ContentDiv = styled.div`
    width: 100%;
    height: auto;
    margin: 20px 0 44px;
    ${({ theme }) => theme.media.minTab} {
        margin-bottom: 34px;
    }
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
    text-transform: uppercase;
    &:hover {
        transition: all 400ms ease;
        color: ${({ theme }) => theme.colors.point};
        text-decoration: underline;
        text-underline-position: under;
    }
`
interface Iprops {
    id?: string
    img?: string
    title?: string
    subtitle?: string
    Classification?: string
    heypopPick?: boolean
    closed?: boolean
    popUp?: boolean
}
function SliderInner({
    id,
    img,
    title,
    subtitle,
    Classification,
    heypopPick,
    closed,
    popUp,
}: Iprops) {
    return (
        <WrapDiv>
            <PickDiv>
                {heypopPick && <HeyPopPick text="heypop pick" />}
                {popUp && <HeyPopPick text="pop-up-" />}
                {closed && <Closed />}
            </PickDiv>
            <StyledLink
                to={`${process.env.PUBLIC_URL}/${Classification}/${id}`}
            >
                <img src={img} alt={subtitle} />
            </StyledLink>
            <ContentDiv>
                <h5>
                    <StyledLink
                        to={`${process.env.PUBLIC_URL}/${Classification}`}
                    >
                        {Classification}
                    </StyledLink>
                </h5>
                <StyledLink
                    to={`${process.env.PUBLIC_URL}/${Classification}/${id}`}
                >
                    <span>{title}</span>
                </StyledLink>
                <div>{subtitle}</div>
            </ContentDiv>
        </WrapDiv>
    )
}
export default SliderInner
