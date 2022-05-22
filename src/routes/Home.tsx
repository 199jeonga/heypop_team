import React from 'react'
import styled from 'styled-components'
import HomeViewbox from 'components/HomeViewbox'
import Header from 'components/Header/Header'

const HomeDiv = styled.div`
    /* color: ${(props) => props.theme.color_point}; */
`

function Home() {
    return (
        <HomeDiv>
            <Header />
            <HomeViewbox />
        </HomeDiv>
    )
}

export default Home
