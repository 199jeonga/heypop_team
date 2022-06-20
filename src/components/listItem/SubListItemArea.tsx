import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import SubListItem from './SubListItem'

const WrapDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: auto;
    max-width: 1057px;
    height: auto;
    margin: auto;
    padding-top: 80px;
    ${({ theme }) => theme.media.maxTab} {
        width: ${({ theme }) => theme.vwLap(1057)};
    }
    ${({ theme }) => theme.media.tab} {
        width: ${({ theme }) => theme.vwTab(800)};
    }
    ${({ theme }) => theme.media.mob} {
        width: ${({ theme }) => theme.vwMob(690)};
    }
`

interface IProps {
    jsonDataLink: string
}
function SubListItemArea({ jsonDataLink }: IProps) {
    const dataAddress = `./data/${jsonDataLink}`
    const [data, setData] = useState<any[]>([])
    const importData = async () => {
        const jsonData = await axios.get(dataAddress, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        setData(jsonData.data)
    }
    useEffect(() => {
        importData()
    }, [])
    return (
        <WrapDiv>
            {data.map((item) => (
                <SubListItem
                    // key={item}
                    key="6"
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                    Classification={item.Classification}
                    heypopPick={item.heypopPick}
                    closed={item.closed}
                    popUp={item.popUp}
                />
            ))}
        </WrapDiv>
    )
}
export default SubListItemArea
