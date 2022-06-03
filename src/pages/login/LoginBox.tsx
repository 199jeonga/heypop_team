import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/pageHeader/PageHeader'
import InputArea from '../../components/form/Input'
import CheckboxArea from '../../components/form/CheckBox'
import ButtonArea from '../../components/form/Button'

const { naver } = window as any

const WrapDiv = styled.div`
    width: 100%;
    max-width: 450px;
    height: auto;
    margin-bottom: 30px;
    padding: 0 20px;
    ${({ theme }) => theme.styles.center}
    a {
        color: ${({ theme }) => theme.colors.gray};
    }
`
const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    padding: 25px 0;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
`

function LoginBox() {
    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: 'yR8_dDPOggmuPZvhgeI0',
            callbackIrl: 'http://localhost:3000/',
            isPopup: true,
            loginButton: { type: 3, height: '47' },
        })
        naverLogin.init()
    }

    useEffect(() => {
        initializeNaverLogin()
    }, [])
    return (
        <WrapDiv>
            <PageHeader HeaderContent="login" />
            <InputArea legendName="이메일 주소" inputId="email" required />
            <InputArea legendName="비밀번호" inputId="password" required />
            <CheckboxArea
                legendName="로그인 상태 유지"
                inputId="rememberme"
                margin="15px 0 0"
            />
            <ButtonArea
                content="로그인"
                bgColor="#fff"
                borderColor="#000"
                textColor="#000"
            />
            <span>
                <StyledLink to="/">비밀번호를 잊으셨나요?</StyledLink>
            </span>
            <ButtonArea
                id="naverIdLogin"
                content="네이버로 로그인"
                bgColor="#1FCC00"
            />
            <ButtonArea content="회원 가입" />
            <div id="naverIdLogin" />
        </WrapDiv>
    )
}
export default LoginBox
