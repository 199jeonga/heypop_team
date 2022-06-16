import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import HeyPopPick from './SubListItemArea'

const WrapDiv = styled.div`
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
const ContentDiv = styled.div`
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
    text-transform: uppercase;
    &:hover {
        transition: all 400ms ease;
        filter: opacity(0.7);
    }
`
interface Iprops {
    id: string
    img: string
    title: string
    subtitle: string
    Classification: string
}
function SliderInner({ id, img, title, subtitle, Classification }: Iprops) {
    return (
        <WrapDiv>
            <HeyPopPick />
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
