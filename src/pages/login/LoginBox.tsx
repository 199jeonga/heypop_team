import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PageHeader from '../../components/pageHeader/PageHeader'
import InputArea from '../../components/form/Input'
import CheckboxArea from '../../components/form/CheckBox'
import ButtonArea from '../../components/form/Button'

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
            <ButtonArea content="네이버로 로그인" bgColor="#1FCC00" />
            <ButtonArea content="회원 가입" />
        </WrapDiv>
    )
}
export default LoginBox
