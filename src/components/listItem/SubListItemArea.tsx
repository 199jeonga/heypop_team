import React from 'react'
import styled from 'styled-components'

const WrapDiv = styled.div`
    display: inline;
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
    }
`
function SubListItemArea() {
    return (
        <WrapDiv>
            <span>HEYPOP PICK</span>
        </WrapDiv>
    )
}
export default SubListItemArea
