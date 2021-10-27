import React from 'react'

type DonutChartDataItem = {
    label: string;
    value: number;
    color?: string;
}

type Props = {
    data: DonutChartDataItem[];
    thicknessRatio?: number;
    // set true to create the donut chart looks like a gauge
    isHalfDonut?: boolean;
}

const Donut:React.FC<Props> = () => {
    return (
        <div>
            
        </div>
    )
}

export default Donut
