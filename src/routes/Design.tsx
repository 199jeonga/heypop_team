import React from 'react'
import styled, { css } from 'styled-components'

import HeaderBox from 'pages/common/header/HeaderBox'
import FooterBox from 'pages/common/footer/FooterBox'
import SliderBox1Item from 'pages/home/slider/SliderBox1Item'
import SubList from '../components/listItem/SubListItemArea'
import Button from '../components/form/LoadMoreButton'

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
            <SubList jsonDataLink="designTop9.json" />
            <SliderBox1Item
                jsonDataLink="designSliderBottom.json"
                customStyle={customStyle}
                padding="0"
            />
            <SubList jsonDataLink="designAll.json" />
            <Button />
            <FooterBox />
        </WrapDiv>
    )
}

export default Design
