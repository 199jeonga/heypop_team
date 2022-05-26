import React from 'react'
import styled from 'styled-components'
import LabelDiv from './SliderInnerLabel'
import BackgroundDiv from './SliderInnerBackground'
import ContentDiv from './SliderInnerContent'

const WrapSection = styled.section`
    position: relative;
    width: 100%;
    height: 642px;
    background-color: rgba(0, 0, 0, 0.2);
`
function SliderArea() {
    return (
        <WrapSection>
            <BackgroundDiv />
            <LabelDiv />
            <ContentDiv />
        </WrapSection>
    )
}
export default SliderArea
