import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundBlurBox from 'pages/common/style/BackgroundBlurBox'

function NewsletterPopupBox() {
    const [showNewsletterPopupBox, setNewsletterPopupBox] = useState(true)
    const newsletterPopupToggle = () =>
        setNewsletterPopupBox(!showNewsletterPopupBox)
    const NewsletterPopupArea = styled.div`
        position: fixed;
        max-width: 850px;
        z-index: 50000;
        width: 850px;
        height: 405px;
        left: 50%;
        top: 50%;
        margin-left: -425px;
        background: #000;
        margin-top: -200px;
        padding: 45px 40px 50px 40px;
        display: ${showNewsletterPopupBox ? 'block' : 'none'};
    `
    const testStyle = {
        display: 'block',
    }
    return (
        <div style={testStyle}>
            {showNewsletterPopupBox && <BackgroundBlurBox />}
            <NewsletterPopupArea>
                <span
                    role="none"
                    onClick={newsletterPopupToggle}
                    onKeyDown={newsletterPopupToggle}
                >
                    newsletter Contents
                </span>
            </NewsletterPopupArea>
        </div>
    )
}

export default NewsletterPopupBox
