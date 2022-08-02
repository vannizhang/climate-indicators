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
            className='p-2 w-screen'
        >
            <IndicatorCard
                {...indicatorData}
            />
        </div>
    );
};

export default CardGroup;
