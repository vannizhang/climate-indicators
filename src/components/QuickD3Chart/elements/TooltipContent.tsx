import React from 'react';

import {
    TOOLTIP_BACKGROUND_COLOR,
    TOOLTIP_TEXT_COLOR,
    TOOLTIP_PADDING
} from '../constants';
import { QuickD3ChartDataItem } from '../types';

type Props = {
    index4ItemOnHover?: number;
    label4BarData?: string;
    barDataOnHover?: QuickD3ChartDataItem;
    lineDataOnHover?: QuickD3ChartDataItem
}

const TooltipContent:React.FC<Props> = ({
    index4ItemOnHover,
    label4BarData,
    barDataOnHover,
    lineDataOnHover
}) => {

    return (
        <div
            style={{
                padding: TOOLTIP_PADDING,
                background: TOOLTIP_BACKGROUND_COLOR,
                color: TOOLTIP_TEXT_COLOR,
                fontSize: '.8rem'
            }}
        >
            <div>
                <span>
                    { label4BarData ? label4BarData + ': ' : null}
                    { barDataOnHover ? barDataOnHover.value : 'n/a' }
                </span>
            </div>

            {/* <div>
                line data: { lineDataOnHover ? lineDataOnHover.value : 'n/a' }
            </div> */}
        </div>
    )
}

export default TooltipContent
