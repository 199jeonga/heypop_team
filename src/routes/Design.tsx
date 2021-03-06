import React from 'react'
import styled from 'styled-components'

import HeaderBox from 'pages/common/header/HeaderBox'
import FooterBox from 'pages/common/footer/FooterBox'
import SliderBox1Item from 'pages/home/slider/SliderBox1Item'
import SubList from '../components/listItem/SubListItemArea'
import NewsLetter from '../pages/home/newsletter/NewsletterBox'

const WrapDiv = styled.div`
    width: 100%;
    height: auto;
`

function Design() {
    return (
        <WrapDiv>
            <HeaderBox />
            <SliderBox1Item jsonDataLink="designSlider.json" padding="0" />
            <SubList jsonDataLink="designTop9.json" />
            <SliderBox1Item
                jsonDataLink="designSliderBottom.json"
                padding="0"
            />
            <SubList jsonDataLink="designAll.json" />
            <NewsLetter />
            <FooterBox />
        </WrapDiv>
    )
}

export default Design
