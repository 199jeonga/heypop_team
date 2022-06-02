import React from 'react'
import styled from 'styled-components'

interface Iprops {
    legendName: string
    inputId: string
    placeHolder?: string
    required?: any
}

const WrapFieldset = styled.fieldset`
    width: 100%;
    height: auto;
    padding-top: 15px;
    legend {
        ${({ theme }) => theme.styles.blind}
    }
    label {
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: 6px;
        color: ${({ theme }) => theme.colors.deepGray};
        ${({ theme }) => theme.styles.fontBasic}
    }
    span {
        color: ${({ theme }) => theme.colors.rightGray};
        ${({ theme }) => theme.styles.fontBasic}
        margin-left: 6px;
    }
`
const TextInput = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    ${({ theme }) => theme.styles.fontBasic}
    border:1px solid ${({ theme }) => theme.colors.lightGray};
    padding: 0 12px;
    cursor: text;
    margin-bottom: 10px;
    outline: none;
    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.gray};
    }
    &::placeholder {
        color: ${({ theme }) => theme.colors.lightGray};
    }
`
function InputArea({ legendName, inputId, placeHolder, required }: Iprops) {
    return (
        <WrapFieldset>
            <legend>{legendName}</legend>
            <label htmlFor={inputId}>
                {legendName}
                {required ? <span title="필수">*</span> : null}
            </label>
            <TextInput
                type="text"
                id={inputId}
                name={inputId}
                placeholder={placeHolder}
                required
            />
        </WrapFieldset>
    )
}
export default InputArea
