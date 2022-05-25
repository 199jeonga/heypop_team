import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import SliderInner from './SliderInner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const StyledSliderBox = styled.section`
    width: 100%;
    height: auto;
    padding-top: 130px;
    ${({ theme }) => theme.media.mob} {
        padding-top: 40px;
    }
    h3 {
        width: 100%;
        font-weight: 700;
        padding-bottom: 47px;
        font-size: 36px;
        line-height: 150%;
        ${({ theme }) => theme.media.tab} {
            padding-bottom: 15px;
            margin-left: 45px;
        }
        ${({ theme }) => theme.media.mob} {
            padding-bottom: 20px;
        }
        ${({ theme }) => theme.media.minTab} {
            font-size: 24px;
            text-align: center;
        }
    }
    & > div {
        width: 1440px;
        height: auto;
        padding: 0 130px;
        ${({ theme }) => theme.styles.center}
        ${({ theme }) => theme.media.lap} {
            width: ${({ theme }) => theme.vwLap(1400)};
            height: auto;
        }
        ${({ theme }) => theme.media.minTab} {
            width: 100%;
            padding: 0;
        }
    }
    .slick-slider {
        position: relative;
        width: 100%;
        height: auto;
        ${({ theme }) => theme.media.lap} {
            padding: 0 10px;
        }
        ${({ theme }) => theme.media.minTab} {
            padding: 0;
        }
    }
    .slick-list {
        width: 100%;
        display: block;
        height: auto;
    }
    .slick-track {
        width: 380px;
        height: auto;
        ${({ theme }) => theme.media.lap} {
            width: 33%;
        }
        ${({ theme }) => theme.media.tab} {
            width: ${({ theme }) => theme.vwTab(836)};
        }
        ${({ theme }) => theme.media.mob} {
            width: ${({ theme }) => theme.vwMob(688)};
        }
    }

    //Slide Button
    .slick-prev,
    .slick-next {
        position: absolute;
        z-index: 100;
        width: 36px;
        height: 36px;
        &::before {
            transition: all 500ms ease;
            color: ${({ theme }) => theme.colors.black};
            opacity: 0.15;
            font-size: 36px;
        }
        ${({ theme }) => theme.media.minTab} {
            ${({ theme }) => theme.styles.displayNone}
        }
    }
    .slick-prev {
        left: -54px;
    }
    .slick-next {
        right: -54px;
    }
`

function SliderBox() {
    // slick slider
    const settings = {
        className: 'center',
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    swipeToSlide: true,
                    centerMode: true,
                    centerPadding: '45px',
                },
            },
        ],
    }

    return (
        <StyledSliderBox>
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
        </StyledSliderBox>
    )
}
export default SliderBox
