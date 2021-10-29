import React, { useContext } from 'react';
import { IndicatorCard } from '..';
import { AppContext } from '../../contexts/AppContextProvider';

const CardGroup = () => {

    const { indicatorData } = useContext(AppContext);

    if(!indicatorData){
        return <p>failed to load indicator data...</p>;
    }

    return (
        <div 
            className='p-2'
            style={{
                maxWidth: 600
            }}
        >
            {/* <IndicatorCard
                topic="Extreme Heat"
                indicatorName="people with at-risk condition"
                indicatorVal={17011}
                timeseriesData={[]}
                timeseriesDataLabel={'30-Day Change'}
                source="NOAA National Weather Service"
                link="esri.com"
            /> */}

            <IndicatorCard
                topic={indicatorData.topic}
                indicatorName={indicatorData.indicatorName}
                indicatorVal={indicatorData.indicatorVal}
                timeseriesData={indicatorData.timeseriesData}
                timeseriesDate={indicatorData.timeseriesDate}
                timeseriesDataLabel={indicatorData.timeseriesDataLabel}
                source={indicatorData.source}
                link={indicatorData.link}
            />
        </div>
    );
};

export default CardGroup;
