import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import styled, { CSSProp } from 'styled-components'
import axios from 'axios'

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
            ${({ theme }) => theme.styles.displayNone}
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
type SliderProps = {
    jsonDataLink: string
    customStyle?: CSSProp
}

function SliderBox({ jsonDataLink }: SliderProps) {
    const dataAddress = `./data/${jsonDataLink}`
    const [data, setData] = useState<any[]>([])
    const importData = async () => {
        const jsonData = await axios.get(dataAddress, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        setData(jsonData.data)
    }
    useEffect(() => {
        importData()
    }, [])
    // slick slider setting
    const settings = {
        className: 'center',
        infinite: true,
        slidesToShow: 1,
        speed: 800,
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
                    {data.map((item) => (
                        <div key={item}>
                            <SliderArea
                                imgBig={item.imgBig}
                                imgMin={item.imgMin}
                                title={item.title}
                                subtitle={item.subtitle}
                                category={item.category}
                                link={item.link}
                            />
                        </div>
                    ))}
                </Slider>
            </WrapDiv>
        </WrapSection>
    )
}
export default SliderBox
