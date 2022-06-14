import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

import PageHeader from '../../components/pageHeader/PageHeader'
import InputArea from '../../components/form/Input'
import CheckboxArea from '../../components/form/CheckBox'
import ButtonArea from '../../components/form/Button'

const WrapForm = styled.form`
    width: 100%;
    max-width: 450px;
    height: auto;
    margin-bottom: 30px;
    padding: 0 20px;
    ${({ theme }) => theme.styles.center}
    a {
        color: ${({ theme }) => theme.colors.gray};
    }
    #naverIdLogin {
        ${({ theme }) => theme.styles.displayNone}
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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onEmailHandle = (e: any) => {
        setEmail(e.currentTarget.value)
    }
    const onPasswordlHandle = (e: any) => {
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e: any) => {
        e.preventDefault()
    }

    const { naver } = window as any
    const location = useLocation()

    const Naver = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: 'yR8_dDPOggmuPZvhgeI0',
            callbackUrl: 'http://localhost:8080/',
            isPopup: false,
            loginButton: { color: 'green', type: 3, height: 47 },
            callbackHandle: true,
        })
        naverLogin.init()
        naverLogin.logout()
    }
    const getNaverToken = () => {
        if (!location.hash) return
        const token = location.hash.split('=')[1].split('&')[0]
        console.log(token, '11')
    }

    useEffect(() => {
        Naver()
        getNaverToken()
    }, [])

    const handleNaver = () => {
        if (
            document &&
            document?.querySelector('#naverIdLogin')?.firstChild &&
            window !== undefined
        ) {
            const loginBtn: any =
                document.getElementById('naverIdLogin')?.firstChild
            loginBtn.click()
        }
    }
    return (
        <WrapForm onSubmit={onSubmitHandler}>
            <PageHeader HeaderContent="login" />
            <InputArea
                legendName="이메일 주소"
                inputId="email"
                type="email"
                required
                onChange={onEmailHandle}
                value={email}
            />
            <InputArea
                legendName="비밀번호"
                inputId="password"
                type="password"
                required
                onChange={onPasswordlHandle}
                value={password}
            />
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
            <div id="naverIdLogin" />
            <ButtonArea
                content="네이버로 로그인"
                bgColor="#1FCC00"
                onClick={handleNaver}
            />
            <ButtonArea content="회원 가입" />
        </WrapForm>
    )
}
export default LoginBox
