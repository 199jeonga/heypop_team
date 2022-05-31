import React from 'react'
import styled from 'styled-components'

interface Iprop {
    legendName: string
    inputId: string
    inputLink?: any
    otherLink?: any
    firstBox?: any
}
const WrapFieldset = styled.fieldset`
    width: 100%;
    height: auto;
    margin-bottom: 15px;
    ${({ theme }) => theme.styles.fontBasic}
    word-wrap: break-word;
    legend {
        ${({ theme }) => theme.styles.blind}
    }
`
const PaddingtopDiv = styled.div`
    padding-top: 30px;
`
const CheckboxInput = styled.input`
    width: auto;
    height: auto;
`
const LabelSpan = styled.span`
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
    margin-left: 8px;
`
function CheckBox({
    legendName,
    inputId,
    inputLink,
    otherLink,
    firstBox,
}: Iprop) {
    return (
        <WrapFieldset>
            <legend>{legendName}</legend>
            {firstBox ? <PaddingtopDiv /> : null}
            <label htmlFor={inputId}>
                <CheckboxInput
                    type="checkbox"
                    id={inputId}
                    name={inputId}
                    value={legendName}
                />
                <LabelSpan>{otherLink ? inputLink : legendName}</LabelSpan>
            </label>
        </WrapFieldset>
    )
}
export default CheckBox
