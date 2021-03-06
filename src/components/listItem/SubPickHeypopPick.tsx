import React from 'react'
import styled from 'styled-components'

const WrapDiv = styled.div`
    display: inline-block;
    width: auto;
    height: auto;
    padding: 3px 6px;
    border: 1px solid ${({ theme }) => theme.colors.point};
    span {
        width: 100%;
        height: auto;
        font-size: 12px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.point};
        text-transform: uppercase;
    }
`
interface Iprop {
    text: string
}
function SubPickHeypopPick({ text }: Iprop) {
    return (
        <WrapDiv>
            <span>{text}</span>
        </WrapDiv>
    )
}
export default SubPickHeypopPick
