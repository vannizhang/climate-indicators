import { parseHash } from 'helper-toolkit-ts/dist/url';
import React from 'react'
import { IndicatorCard } from '..';

const hashData = parseHash();
// item id of the feature layer
const itemId = hashData['id'] || null;

const CardView = () => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <div 
                className='p-2 w-screen'
            >
                <IndicatorCard
                    itemId={itemId}
                />
            </div>
        </div>
    );
}

export default CardView