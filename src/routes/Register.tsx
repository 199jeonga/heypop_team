import React from 'react'
import HeaderBox from 'pages/common/header/HeaderBox'
import FooterBox from 'pages/common/footer/FooterBox'
import NewsletterBox from 'pages/home/newsletter/NewsletterBox'
import RegisterBox from '../pages/register/RegisterBox'

function Register() {
    return (
        <div>
            <HeaderBox />
            <RegisterBox />
            <NewsletterBox />
            <FooterBox />
        </div>
    )
}
export default Register
