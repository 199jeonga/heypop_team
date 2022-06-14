import React from 'react'
import HeaderBox from 'pages/common/header/HeaderBox'
import FooterBox from 'pages/common/footer/FooterBox'
import LoginBox from 'pages/login/LoginBox'
import NewsletterBox from 'pages/home/newsletter/NewsletterBox'

function Login() {
    return (
        <div>
            <HeaderBox />
            <LoginBox />
            <NewsletterBox />
            <FooterBox />
        </div>
    )
}
export default Login
