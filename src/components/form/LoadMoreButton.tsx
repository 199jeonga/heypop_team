import React from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

const WrapDiv = styled.div`
    width: 150px;
    height: 100px;
    margin: auto;
    margin: auto;
    button {
        width: auto;
        height: auto;
        position: relative;
        background-color: transparent;
        border: none;
        transition: all 300ms ease-in-out;
        &:hover {
            color: ${({ theme }) => theme.colors.point};
        }
    }
    span {
        width: 100%;
        height: auto;
        font-size: 28px;
        font-weight: 700;
        cursor: pointer;
    }
    i {
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: auto;
        height: 12px;
        font-size: 24px;
    }
`
function LoadMoreButton() {
    return (
        <WrapDiv>
            <button type="button">
                <span>Load More</span>
                <i>
                    <IoIosArrowDown />
                </i>
            </button>
        </WrapDiv>
    )
}

export default LoadMoreButton
