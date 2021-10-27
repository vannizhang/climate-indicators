import React from 'react';
import { IndicatorCard } from '..';

const CardGroup = () => {
    return (
        <div 
            className='p-2'
            style={{
                maxWidth: 600
            }}
        >
            <IndicatorCard
                topic="Extrem Heat"
                indicatorName="people with at-risk condition"
                indicatorVal={17011}
                timeseriesData={[]}
                timeseriesDataLabel={'30-Day Change'}
                source="NOAA National Weather Service"
                link="esri.com"
            />
        </div>
    );
};

export default CardGroup;
