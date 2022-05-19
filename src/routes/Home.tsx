import React from 'react'
import styled from 'styled-components'

const HomeDiv = styled.div`
    color: ${(props) => props.theme.color_point};
`

function Home() {
    return <HomeDiv>Home!!!!</HomeDiv>
}

export default Home
