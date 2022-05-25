import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import SliderInner from './SliderInner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderBox = styled.section`
    width: 100%;
    height: 417px;
    padding-top: 130px;
    h3 {
        width: 100%;
        font-weight: 700;
        padding-bottom: 47px;
        font-size: 36px;
        line-height: 150%;
    }
    & > div {
        width: 1440px;
        height: 417px;
        padding: 0 130px;
        ${({ theme }) => theme.styles.center}
    }
    .slick-slider {
        width: 1200px;
        height: 100%;
    }
    .slick-list {
        width: 100%;
        display: block;
        height: 100%;
    }
    .slick-track {
        width: 380px;
        height: 100%;
    }

    //Slide Button
    .slick-prev,
    .slick-next {
        position: absolute;
        z-index: 10;
        width: 50px;
        height: 50px;
        &::before {
            transition: all 500ms ease;
            color: ${({ theme }) => theme.colors.black};
            opacity: 0.15;
            font-size: 36px;
        }
    }
    .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    }
`
// eslint-disable-next-line react/prefer-stateless-function
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            className: 'center',
            infinite: true,
            slidesToShow: 3,
            centermode: true,
            centerpadding: 0,
        }

        return (
            <SliderBox>
                <div>
                    <h3>주목해야 할 위클리 팝업 POP10</h3>
                    <Slider {...settings}>
                        <div>
                            <SliderInner />
                        </div>
                        <div>
                            <SliderInner />
                        </div>
                        <div>
                            <SliderInner />
                        </div>
                        <div>
                            <SliderInner />
                        </div>
                        <div>
                            <SliderInner />
                        </div>
                        <div>
                            <SliderInner />
                        </div>
                    </Slider>
                </div>
            </SliderBox>
        )
    }
}
