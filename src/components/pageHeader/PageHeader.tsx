import React from 'react'
import styled from 'styled-components'

const PageheaderDiv = styled.div`
    width: 100%;
    height: auto;
    padding: 80px 0 40px;
    h3 {
        width: 100%;
        height: auto;
        font-size: 36px;
        text-transform: uppercase;
        line-height: 150%;
        text-align: center;
        font-weight: 900;
    }
`
interface Iprop {
    HeaderContent: string
}
function pageHeader({ HeaderContent }: Iprop) {
    return (
        <PageheaderDiv>
            <h3>{HeaderContent}</h3>
        </PageheaderDiv>
    )
}
export default pageHeader
