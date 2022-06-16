import React from 'react'
import styled, { css } from 'styled-components'

import HeaderBox from 'pages/common/header/HeaderBox'
import FooterBox from 'pages/common/footer/FooterBox'
import SliderBox1Item from 'pages/home/slider/SliderBox1Item'

const WrapDiv = styled.div`
    width: 100%;
    height: auto;
`
const customStyle = css`
    background-color: #f00;
`
function Design() {
    return (
        <WrapDiv>
            <HeaderBox />
            <SliderBox1Item
                jsonDataLink="designSlider.json"
                customStyle={customStyle}
                padding="0"
            />
            <FooterBox />
        </WrapDiv>
    )
}

export default Design
