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

interface Iprops {
    imgBig: string
    imgMin: string
    title: string
    subtitle: string
    category: string
    link: string
}

function SliderArea({
    imgBig,
    imgMin,
    title,
    subtitle,
    category,
    link,
}: Iprops) {
    return (
        <WrapSection>
            <BackgroundDiv imgMin={imgMin} imgBig={imgBig} link={link} />
            <LabelDiv category={category} />
            <ContentDiv title={title} subtitle={subtitle} />
        </WrapSection>
    )
}
export default SliderArea
