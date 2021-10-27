import React from 'react';
import { numberWithCommas } from 'helper-toolkit-ts/dist/number';
import {
    BarLineCombined
  } from '../QuickD3Chart';
import { QuickD3ChartData } from '../QuickD3Chart/types';
import { BAR_COLOR } from '../../constants/style';
import classnames from 'classnames'

type Props = {
    isFeatured?: boolean;
    topic: string;
    indicatorName: string;
    indicatorVal: number;
    timeseriesData: number[];
    timeseriesDataLabel?: string;
    source: string;
    link?: string;
};

const IndicatorCard: React.FC<Props> = ({
    isFeatured=false,
    topic,
    indicatorName,
    indicatorVal,
    timeseriesData,
    timeseriesDataLabel,
    source,
    link,
}: Props) => {

    const classNamesContatiner = classnames("text-custom-primary w-full md:w-1/2 px-2 mb-6", {
        "lg:w-1/3": !isFeatured,
        "md:px-4": !isFeatured,
        "lg:w-1/2": isFeatured,
        "md:px-6": isFeatured
    })

    const getChartData = ()=>{
        const data4BarChart: QuickD3ChartData = [];

        for(let i = 0; i < 30; i++){
            const data = {
                key: i.toString(),
                value: Math.floor(Math.random() * 50) + 5
            }

            data4BarChart.push(data)
        }

        return data4BarChart;
    }

    return (
        <div className={classNamesContatiner}>
            <div className="border-b border-custom-primary border-opacity-30 pb-4 mb-3">
                <span className="text-4xl font-light">{topic}</span>
            </div>

            <div className="flex mb-2">
                <div
                    style={{
                        minWidth: '170px'
                    }}
                >
                    <div>
                        <span className="text-4xl font-noraml">
                            {numberWithCommas(indicatorVal)}
                        </span>
                    </div>

                    <div className="">
                        <span className="text-2xl font-light">
                            {indicatorName}
                        </span>
                    </div>
                </div>

                <div className="flex-grow ml-1">
                    {
                        timeseriesDataLabel ? (
                            <div className='text-right text-sm text-gray-400'>{timeseriesDataLabel}</div>
                        ) : null
                    }
                    
                    <div className='w-full h-20'>
                        <BarLineCombined 
                            // timeFormatSpecifier='%b %d'
                            barColor={BAR_COLOR}
                            data4Bars={getChartData()}
                            showAxis={false}
                            label4BarData={'value'}
                        />
                    </div>
                </div>
            </div>

            <div className="text-gray-400">
                <span className="text-sm">source: {source}</span>
            </div>
        </div>
    );
};

export default IndicatorCard;
