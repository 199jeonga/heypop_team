import React from 'react'
import Viewbox from 'pages/home/viewbox/Viewbox'
import HeaderBox from 'pages/common/header/HeaderBox'
import SliderBox from 'pages/common/slider/SliderBox'

function Home() {
    return (
        <div>
            <HeaderBox />
            <Viewbox />
            <SliderBox />
        </div>
    )
}

export default Home
