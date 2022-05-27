import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import axios from 'axios'

import SliderArea from '../../../components/listItem/ListItem'
import TitleH3 from './SliderAreaH3'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const WrapSection = styled.section`
    width: 100%;
    height: auto;
    padding-top: 130px;
    ${({ theme }) => theme.media.mob} {
        padding-top: 40px;
    }
`
const WrapDiv = styled.div`
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

    //slick - className --------------------------
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
type SliderProps = {
    title: string
    jsonDataLink: string
}

function SliderBox({ title, jsonDataLink }: SliderProps) {
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
        <WrapSection>
            <WrapDiv>
                <TitleH3 text={title} />
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item}>
                            <SliderArea
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                subtitle={item.subtitle}
                                Classification={item.Classification}
                            />
                        </div>
                    ))}
                </Slider>
            </WrapDiv>
        </WrapSection>
    )
}
export default SliderBox
