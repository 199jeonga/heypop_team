import React, { useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'
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
`

function RegisterBox() {
    const [NickName, setNickName] = useState('')
    const [Email, setEmail] = useState('')
    const [MobileNumber, setMobileNumber] = useState('')
    const [BirthDay, setBirthDay] = useState('')
    const [UsePassword, setUsePassword] = useState('')
    const [ConfirmUsePassword, setConfirmUsePassword] = useState('')
    // const dispatch = useDispatch()

    const onNicknameHandle = (e: any) => {
        setNickName(e.target.value)
    }
    const onEmailHandle = (e: any) => {
        setEmail(e.target.value)
    }
    const onMobilenumberHandle = (e: any) => {
        setMobileNumber(e.target.value)
    }
    const onBirthdayHandle = (e: any) => {
        setBirthDay(e.target.value)
    }
    const onPasswordHandle = (e: any) => {
        setUsePassword(e.target.value)
    }
    const onConfirmpasswordHandle = (e: any) => {
        setConfirmUsePassword(e.target.value)
    }
    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        if (UsePassword === ConfirmUsePassword) {
            //         dispatch(registerUser(body)).then(() => {
            //             alert(
            //                 '가입이 정상적으로 완료되었습니다. 로그인 창으로 이동하는 기능도 넣어요~!'
            //             )
            //         })
            //     } else {
            //         alert('비밀번호가 일치하지 않습니다')
            //     }
            const DOMAIN = 'http://15.164.164.238:8080'
            axios({
                method: 'POST',
                url: `${DOMAIN}/user`,
                data: {
                    email: Email,
                    password: UsePassword,
                    nickName: NickName,
                    phoneNumber: MobileNumber,
                    birthDate: BirthDay,
                },
            })
                .then((res) => res.data)
                .catch((err) => console.log(err))
        }
    }
    return (
        <WrapForm onSubmit={onSubmitHandler}>
            <PageHeader HeaderContent="signup" />
            <InputArea
                legendName="이름(닉네임)"
                inputId="nickName"
                type="text"
                required
                onChange={onNicknameHandle}
                value={NickName}
            />
            <InputArea
                legendName="이메일 주소"
                inputId="userEmail"
                type="email"
                required
                onChange={onEmailHandle}
                value={Email}
            />
            <InputArea
                legendName="휴대폰 번호"
                inputId="mobileNumber"
                type="number"
                placeHolder="- 없이 숫자만 입력"
                required
                onChange={onMobilenumberHandle}
                value={MobileNumber}
            />
            <InputArea
                legendName="생년월일"
                inputId="birthDay"
                type="text"
                required
                onChange={onBirthdayHandle}
                value={BirthDay}
            />
            <InputArea
                legendName="비밀번호"
                inputId="usePassword"
                type="password"
                placeHolder="최소 8자리, 대 소문자, 숫자, 특수문자 포함"
                required
                onChange={onPasswordHandle}
                value={UsePassword}
            />
            <InputArea
                legendName="비밀번호 확인"
                inputId="confirmUsePassword"
                type="password"
                onChange={onConfirmpasswordHandle}
                value={ConfirmUsePassword}
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
        </WrapForm>
    )
}
export default RegisterBox
