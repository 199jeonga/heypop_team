import React from 'react'
import styled from 'styled-components'

const WrapDiv = styled.div`
    width: auto;
    height: auto;
    padding: 3px 6px;
    border: 1px solid ${({ theme }) => theme.colors.point};
    span {
        width: 100%;
        height: auto;
        font-size: 12px;
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
