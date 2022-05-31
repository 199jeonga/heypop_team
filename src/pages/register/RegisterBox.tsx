import React from 'react'
import styled from 'styled-components'

import PageHeader from '../../components/pageHeader/PageHeader'
import InputArea from '../../components/form/Input'
import CheckboxArea from '../../components/form/CheckBox'
import ButtonArea from '../../components/form/Button'

const Wrap = styled.form`
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

function RegisterBox() {
    return (
        <Wrap>
            <PageHeader HeaderContent="signup" />
            <InputArea legendName="이름(닉네임)" inputId="nickName" required />
            <InputArea legendName="이메일 주소" inputId="userEmail" required />
            <InputArea
                legendName="휴대폰 번호"
                inputId="mobileNumber"
                placeHolder="- 없이 숫자만 입력"
                required
            />
            <InputArea legendName="생년월일" inputId="birthDay" required />
            <InputArea
                legendName="비밀번호"
                inputId="usePassword"
                placeHolder="최소 8자리, 대 소문자, 숫자, 특수문자 포함"
                required
            />
            <InputArea
                legendName="비밀번호 확인"
                inputId="confirmUsePassword"
                required
            />
            <CheckboxArea
                legendName="[필수] 이용 약관 및 개인정보 처리방침에 동의합니다."
                inputId="TermsOfService"
                otherLink
                inputLink={
                    <span>
                        [필수]{' '}
                        <a href="https://heypop.kr/terms-conditions/">
                            이용 약관
                        </a>{' '}
                        및{' '}
                        <a href="https://heypop.kr/privacy-policy/">
                            개인정보 처리방침
                        </a>
                        에 동의합니다.
                    </span>
                }
                firstBox
            />
            <CheckboxArea
                legendName="[필수] 만 14세 이상임을 확인하고 동의합니다."
                inputId="agreementAge"
            />
            <CheckboxArea
                legendName="[선택] 뉴스레터 구독과 함께 개인정보 수집 및 이용약관에 동의합니다."
                inputId="agreementNewletter"
            />
            <ButtonArea content="회원가입" />
        </Wrap>
    )
}
export default RegisterBox
