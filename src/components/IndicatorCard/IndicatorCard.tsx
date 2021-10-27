import React from 'react';
import { numberWithCommas } from 'helper-toolkit-ts/dist/number';
import {
    BarLineCombined
  } from '../QuickD3Chart';
import { QuickD3ChartData } from '../QuickD3Chart/types';
import { BAR_COLOR } from '../../constants/style';

type Props = {
    topic: string;
    indicatorName: string;
    indicatorVal: number;
    timeseriesData: number[];
    timeseriesDataLabel?: string;
    source: string;
    link?: string;
};

const IndicatorCard: React.FC<Props> = ({
    topic,
    indicatorName,
    indicatorVal,
    timeseriesData,
    timeseriesDataLabel,
    source,
    link,
}: Props) => {

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
        <div className="text-custom-primary w-full md:w-1/2 lg:w-1/3 px-2 lg:px-4 mb-6">
            <div className="border-b border-custom-primary border-opacity-30 pb-4 mb-3">
                <span className="text-5xl font-light">{topic}</span>
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
                            label4BarData={'num of jobs'}
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
