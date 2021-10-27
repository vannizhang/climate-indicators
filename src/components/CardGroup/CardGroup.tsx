import React from 'react';
import { IndicatorCard } from '..';

const CardGroup = () => {
    return (
        <div className="w-full md:max-w-screen-md lg:max-w-hub-container py-4 px-4 md:px-2 lg:px-0 flex">
            <IndicatorCard
                topic="Droght"
                indicatorName="agricultural jobs in impacted area"
                indicatorVal={623576}
                timeseriesData={[]}
                source="NIDIS/USDA Census of Agriculture"
                link="esri.com"
            />
        </div>
    );
};

export default CardGroup;
