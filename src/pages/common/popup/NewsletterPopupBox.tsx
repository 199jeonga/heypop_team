import React from 'react'
import styled from 'styled-components'
import BackgroundBlurBox from 'pages/common/style/BackgroundBlurBox'

function NewsletterPopupBox() {
    const NewsletterPopupArea = styled.div`
        position: fixed;
        max-width: 850px;
        z-index: 10;
        width: 850px;
        height: 405px;
        left: 50%;
        top: 50%;
        margin-left: -425px;
        background: #000;
        margin-top: -200px;
        padding: 45px 40px 50px 40px;
    `

    return (
        <div>
            <BackgroundBlurBox />
            <NewsletterPopupArea>newsletter Contents</NewsletterPopupArea>
        </div>
    )
}

export default NewsletterPopupBox
