import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { ChevronForwardOutline, ChevronBackOutline } from 'react-ionicons'

import SliderArea from './SliderArea'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props
    return (
        <button
            className={className}
            style={{ ...style, display: 'block', background: 'red' }}
            onClick={onClick}
            onKeyPress={onClick}
            type="button"
            aria-label="다음 슬라이드로 이동"
        >
            <ChevronForwardOutline
                color="#ffffff"
                title="title이뭐냐"
                height="48px"
                width="48px"
            />
        </button>
    )
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props
    return (
        <button
            className={className}
            style={{ ...style, display: 'block', background: 'red' }}
            onClick={onClick}
            onKeyPress={onClick}
            type="button"
            aria-label="다음 슬라이드로 이동"
        >
            <ChevronBackOutline
                color="#ffffff"
                title="title이뭐냐"
                height="48px"
                width="48px"
            />
        </button>
    )
}

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
        position: absolute;
        z-index: 100;
        width: 48px;
        height: 48px;
        top: 550px;
        &::before {
            transition: all 500ms ease;
            color: ${({ theme }) => theme.colors.black};
            opacity: 0.15;
            font-size: 48px;
        }
        ${({ theme }) => theme.media.minTab} {
            ${({ theme }) => theme.styles.displayNone}
        }
    }
    .slick-prev {
        left: 130px;
    }
    .slick-next {
        right: 130px;
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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
