import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SliderBox() {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
    }
    return (
        <section className="page-carousel">
            <Slider {...settings} />
        </section>
    )
}
export default SliderBox
