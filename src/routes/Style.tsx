import React from 'react'
import styled from 'styled-components'

import HeaderBox from 'pages/common/header/HeaderBox'
import FooterBox from 'pages/common/footer/FooterBox'
import SliderBox1Item from 'pages/home/slider/SliderBox1Item'
import SubList from '../components/listItem/SubListItemArea'

const WrapDiv = styled.div`
    width: 100%;
    height: auto;
`

function Style() {
    return (
        <WrapDiv>
            <HeaderBox />
            <SliderBox1Item jsonDataLink="styleSlider.json" padding="0" />
            <SubList jsonDataLink="designTop9.json" />
            <SliderBox1Item jsonDataLink="artSliderBottom.json" padding="0" />
            <SubList jsonDataLink="homeliving.json" />
            <FooterBox />
        </WrapDiv>
    )
}

export default Style
