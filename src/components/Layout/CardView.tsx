// import { parseHash } from 'helper-toolkit-ts/dist/url';
import React, { FC } from 'react'
import { IndicatorCard } from '..';

type Props = {
    itemId: string | null;
}

const CardView:FC<Props> = ({
    itemId
}) => {
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