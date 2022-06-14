import React from 'react'

function SliderAreaPrevarrow(props: any) {
    const { className, style, onClick } = props
    return (
        <button
            className={className}
            style={{ ...style, display: 'block', top: '550px' }}
            onClick={onClick}
            onKeyPress={onClick}
            type="button"
            aria-label="다음 슬라이드로 이동"
        >
            <img
                src="https://storage.oneslist.com/assets/2021/11/16165953/main_slider_left.png"
                alt="이전 슬라이드 보기"
                style={{ width: '48px', height: '48px' }}
            />
        </button>
    )
}

export default SliderAreaPrevarrow
