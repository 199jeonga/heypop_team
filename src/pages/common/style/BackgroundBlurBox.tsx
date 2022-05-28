import React from 'react'
import styled from 'styled-components'

function BackgroundBlurBox() {
    const BackgroundBlurArea = styled.div`
        position: fixed;
        z-index: 1;
        top: 70px;
        bottom: 0;
        left: 0;
        right: 0;
        background: #000;
        -moz-opacity: 0.3;
        -khtml-opacity: 0.3;
        -webkit-opacity: 0.3;
        opacity: 0.3;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=30);
        filter: alpha(opacity=30);
    `

    return <BackgroundBlurArea />
}

export default BackgroundBlurBox
