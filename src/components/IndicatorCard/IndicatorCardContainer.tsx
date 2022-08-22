import React, { FC, useEffect, useState } from 'react'
import { fetchIndicatorData, IndicatorData } from '../../services/fetchIndicatorData';
import IndicatorCard from './IndicatorCard';

type Props = {
    itemId: string;
}

const IndicatorCardContainer:FC<Props> = ({
    itemId
}) => {

    // const indicatorData = useIndicatorData(itemId);

    const [indicatorData, setIndicatorData] = useState<IndicatorData>();

    useEffect(()=>{

        if(!itemId){
            return
        }

        (async()=>{

            try {
                const indicatorData = await fetchIndicatorData(itemId);
                setIndicatorData(indicatorData)
            } catch(err){
                console.log(err)
            }
            
        })()

    }, [itemId])

    return indicatorData 
        ? (
            <IndicatorCard
                {...indicatorData}
            /> 
        )
        : (
            <div className='text-center'>loading</div>
        )
}

export default IndicatorCardContainer