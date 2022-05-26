import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import SliderArea from './SliderArea'
import NextArrow from './SliderAreaNextarrow'
import PrevArrow from './SliderAreaPrevarrow'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const WrapSection = styled.section`
    width: 100%;
    height: auto;
    padding-top: 130px;
    h3 {
        ${({ theme }) => theme.styles.blind}
    }
`
const WrapDiv = styled.div`
    width: 100%;
    height: auto;

    //slick - className --------------------------
    .slick-slider {
        width: 100%;
        height: auto;
    }
    .slick-list {
        position: relative;
        width: 100%;
        height: auto;
    }
    .slick-track {
        width: 100%;
        height: auto;
    }

    //Slide Button
    .slick-prev,
    .slick-next {
        ${({ theme }) => theme.styles.displayNone}
        position: absolute;
        z-index: 100;
        width: 48px;
        height: 48px;
        &::before {
            display: none;
        }
        ${({ theme }) => theme.media.minTab} {
            ${({ theme }) => theme.styles.displayNone}
        }
    }
    .slick-prev {
        left: 200px;
        ${({ theme }) => theme.media.lap} {
            left: ${({ theme }) => theme.vwLap(200)};
        }
    }
    .slick-next {
        right: 200px;
        ${({ theme }) => theme.media.lap} {
            right: ${({ theme }) => theme.vwLap(200)};
        }
    }
`

function SliderBox() {
    // const [data, setata] = useState([])
    // const fetchData = () => {
    //     fetch(`/data/trend.json`, {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json',
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((re) => console.log(re))
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])
    // slick slider
    const settings = {
        className: 'center',
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        centerMode: true,
        centerPadding: '0',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    swipeToSlide: true,
                },
            },
        ],
    }

    return (
        <WrapSection>
            <WrapDiv>
                <h3>카테고리별 인기 게시글</h3>
                <Slider {...settings}>
                    <div>
                        <SliderArea />
                    </div>
                    <div>
                        <SliderArea />
                    </div>
                    <div>
                        <SliderArea />
                    </div>
                </Slider>
            </WrapDiv>
        </WrapSection>
    )
}
export default SliderBox
