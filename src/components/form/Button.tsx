import React from 'react'
import styled from 'styled-components'

interface Iprop {
    content: string
}
const WrapDiv = styled.div`
    width: 100%;
    height: auto;
    margin: 40px 0 5px;
    button {
        width: 100%;
        min-width: 250px;
        height: auto;
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        text-align: center;
        padding: 16px 20px;
        margin-bottom: 5px;
        font-size: 15px;
        border: none;
        cursor: pointer;
    }
`
function Button({ content }: Iprop) {
    return (
        <WrapDiv>
            <button type="submit">{content}</button>
        </WrapDiv>
    )
}
export default Button
