import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import SubListItem from './SubListItem'

const WrapDiv = styled.div`
    width: 100%;
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
                    key={item}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                    Classification={item.Classification}
                    heypopPick={item.heypopPick}
                    closed={item.closed}
                />
            ))}
        </WrapDiv>
    )
}
export default SubListItemArea
