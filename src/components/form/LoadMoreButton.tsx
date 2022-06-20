import React from 'react'
import styled from 'styled-components'

const WrapDiv = styled.div`
    width: 100%;
    button {
        position: relative;
        background-color: transparent;
        border: none;
    }
    span {
        width: 100%;
        height: auto;
        font-size: 28px;
        font-weight: 700;
        cursor: pointer;
        transition: all 300ms ease-in-out;
        color: ${({ theme }) => theme.colors.black};
        &:hover {
            color: ${({ theme }) => theme.colors.point};
            &::before {
                color: ${({ theme }) => theme.colors.point};
            }
        }
        &::before {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 12px;
            background-image: url(https://storage.oneslist.com/assets/2021/11/19144801/arrow_down-1.svg);
            background-size: contain;
        }
    }
`
function LoadMoreButton() {
    return (
        <WrapDiv>
            <button type="button">
                <span>Load More</span>
            </button>
        </WrapDiv>
    )
}

export default LoadMoreButton
