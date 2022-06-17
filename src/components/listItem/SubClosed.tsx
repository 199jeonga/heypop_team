import React from 'react'
import styled from 'styled-components'

const WrapDiv = styled.div`
    display: inline-block;
    width: auto;
    height: auto;
    padding: 3px 6px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    margin-left: 4px;
    span {
        width: 100%;
        height: auto;
        font-size: 12px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.black};
        text-transform: uppercase;
    }
`
function SubCloesd() {
    return (
        <WrapDiv>
            <span>closed</span>
        </WrapDiv>
    )
}
export default SubCloesd
