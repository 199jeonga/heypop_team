import React from 'react'
import Viewbox from 'pages/home/viewbox/Viewbox'
import HeaderBox from 'pages/common/header/HeaderBox'
import SliderBox3Item from 'pages/common/slider/SliderBox3Item'
import SliderBox1Item from 'pages/common/slider/SliderBox1Item'

function Home() {
    return (
        <div>
            <HeaderBox />
            <Viewbox />
            <SliderBox3Item />
            <SliderBox1Item />
        </div>
    )
}

export default Home
