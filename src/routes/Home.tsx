import React from 'react'
import styled from 'styled-components'
import HomeViewbox from '../components/HomeViewbox'

const HomeDiv = styled.div`
    /* color: ${(props) => props.theme.color_point}; */
`

function Home() {
    return (
        <HomeDiv>
            <HomeViewbox />
        </HomeDiv>
    )
}

export default Home
