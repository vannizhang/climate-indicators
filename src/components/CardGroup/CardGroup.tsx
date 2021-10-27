import React from 'react';
import { IndicatorCard } from '..';

const CardGroup = () => {
    return (
        <div className="block md:flex justify-start flex-wrap w-full md:max-w-screen-md lg:max-w-hub-container py-4 px-2 md:px-2 lg:px-0 ">
            <IndicatorCard
                isFeatured={true}
                topic="Extrem Heat"
                indicatorName="people with at-risk condition"
                indicatorVal={17011}
                timeseriesData={[]}
                timeseriesDataLabel={'30-Day Change'}
                source="NOAA National Weather Service"
                link="esri.com"
            />

            <IndicatorCard
                isFeatured={true}
                topic="Wildfire"
                indicatorName="active fires"
                indicatorVal={121}
                timeseriesData={[]}
                timeseriesDataLabel={'30-Day Change'}
                source="National Interagency Fire Center"
                link="esri.com"
            />

            <IndicatorCard
                topic="Droght"
                indicatorName="agricultural jobs in impacted area"
                indicatorVal={623576}
                timeseriesData={[]}
                timeseriesDataLabel={'30-Day Change'}
                source="NIDIS/USDA Census of Agriculture"
                link="esri.com"
            />

            <IndicatorCard
                topic="Coastal Flooding"
                indicatorName="people living in warning area"
                indicatorVal={24298}
                timeseriesData={[]}
                timeseriesDataLabel={'30-Day Change'}
                source="NOAA National Weather Service"
                link="esri.com"
            />

            <IndicatorCard
                topic="Flash Flooding"
                indicatorName="people living in warning area"
                indicatorVal={592548}
                timeseriesData={[]}
                timeseriesDataLabel={'30-Day Change'}
                source="NOAA National Weather Service"
                link="esri.com"
            />
        </div>
    );
};

export default CardGroup;
