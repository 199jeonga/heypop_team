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
            <SliderBox3Item
                title="주목해야 할 위클리 팝업 POP10"
                jsonDataLink="homeWeeklyPopup.json"
            />
            <SliderBox3Item
                title="지금 뜨는 트렌드 이슈"
                jsonDataLink="homeTrend.json"
            />
            <SliderBox1Item jsonDataLink="homeCategoryRecommended.json" />
            <SliderBox3Item title="Design" jsonDataLink="trend.json" />
            <SliderBox3Item title="Art" jsonDataLink="trend.json" />
            <SliderBox1Item jsonDataLink="homeStories.json" />
            <SliderBox3Item title="Living" jsonDataLink="trend.json" />
            <SliderBox3Item title="Style" jsonDataLink="trend.json" />
            <SliderBox3Item title="Food" jsonDataLink="trend.json" />
            <SliderBox1Item jsonDataLink="homeAbout.json" />
        </div>
    )
}

export default Home
