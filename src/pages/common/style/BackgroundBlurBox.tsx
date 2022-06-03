import React from 'react'
import styled from 'styled-components'

function BackgroundBlurBox() {
    const BackgroundBlurArea = styled.div`
        position: fixed;
        z-index: 30000;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.colors.black};
        -moz-opacity: 0.7;
        -khtml-opacity: 0.7;
        -webkit-opacity: 0.7;
        opacity: 0.7;
        -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);
        filter: alpha(opacity=70);
    `
    return <BackgroundBlurArea />
}

export default BackgroundBlurBox
