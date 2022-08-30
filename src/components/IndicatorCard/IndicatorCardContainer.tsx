import React, { FC, useEffect, useState } from 'react'
import { fetchIndicatorData, IndicatorData } from '../../services/fetchIndicatorData';
import IndicatorCard from './IndicatorCard';

type Props = {
    itemId: string;
    shouldShowChart?: boolean;
    shouldUseCreativeLabStyle?: boolean;
    onSelect?: (itemId:string)=>void;
}

const IndicatorCardContainer:FC<Props> = ({
    itemId,
    shouldShowChart=false,
    shouldUseCreativeLabStyle,
    onSelect
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
            <div className='relative h-full w-full'
                onClick={()=>{
                    if(onSelect){
                        onSelect(itemId)
                    }
                }}
            >
                <IndicatorCard
                    data={indicatorData}
                    shouldShowChart={shouldShowChart}
                    shouldUseCreativeLabStyle={shouldUseCreativeLabStyle}
                /> 
            </div>

        )
        : (
            <div className='text-center w-full h-full'>loading</div>
        )
}

export default IndicatorCardContainer