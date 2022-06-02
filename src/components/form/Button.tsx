import React from 'react'
// import styled, { CSSProp } from 'styled-components'
import styled from 'styled-components'

interface Iprop {
    content: string
    bgColor?: string
    borderColor?: string
    textColor?: string
}

const WrapDiv = styled.div`
    width: 100%;
    height: auto;
    margin: 5px 0;
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
function Button({ content, bgColor, borderColor, textColor }: Iprop) {
    return (
        <WrapDiv>
            <button
                type="submit"
                style={{
                    backgroundColor: bgColor,
                    border: `${borderColor} 1px solid`,
                    color: textColor,
                }}
            >
                {content}
            </button>
        </WrapDiv>
    )
}
export default Button
