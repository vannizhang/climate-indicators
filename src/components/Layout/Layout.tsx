import React, { useContext } from 'react';
import { IndicatorCard } from '..';
import { AppContext } from '../../contexts/AppContextProvider';

const CardGroup = () => {

    const { indicatorData } = useContext(AppContext);

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">

            { indicatorData 
                ? (
                    <div 
                        className='p-2 w-screen'
                    >
                        <IndicatorCard
                            {...indicatorData}
                        />
                    </div>
                ): (
                    <p>failed to load indicator data...</p>
                )
            }
        </div>
    );
};

export default CardGroup;
