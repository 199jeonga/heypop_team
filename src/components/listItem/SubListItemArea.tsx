import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Button from '../form/LoadMoreButton'
import SubListItem from './SubListItem'

const WrapDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: auto;
    height: auto;
    margin: auto;
    padding-top: 80px;

    ${({ theme }) => theme.media.pc} {
        max-width: 1200px;
    }
    ${({ theme }) => theme.media.lap} {
        width: ${({ theme }) => theme.vwLap(1188)};
        max-width: 1188px;
        min-width: 850px;
    }
    ${({ theme }) => theme.media.tab} {
        width: ${({ theme }) => theme.vwTab(800)};
        max-width: 850px;
    }
    ${({ theme }) => theme.media.mob} {
        width: ${({ theme }) => theme.vwMob(690)};
    }
`

interface IProps {
    jsonDataLink: string
}
function SubListItemArea({ jsonDataLink }: IProps) {
    const plusButton: number = 9
    const dataAddress = `./data/${jsonDataLink}`
    const [dataList, setDataList] = useState<any[]>([])

    const [sliderView, setSliderView] = useState<any | any[]>(9)
    const onClickMoreBtn = () => {
        setSliderView(sliderView + plusButton)
    }
    const viewData = dataList.filter((value, i) => i < sliderView)

    const importData = async () => {
        const jsonData = await axios.get(dataAddress, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
        setDataList(jsonData.data)
    }

    useEffect(() => {
        importData()
    }, [])

    return (
        <WrapDiv>
            {viewData.map((item) => (
                <SubListItem
                    key={item.indexNum}
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
            {dataList.length > 9 && <Button onClick={onClickMoreBtn} />}
        </WrapDiv>
    )
}
export default SubListItemArea
