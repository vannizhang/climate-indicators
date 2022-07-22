import React from 'react';
import { numberWithCommas } from 'helper-toolkit-ts/dist/number';
import {
    BarLineCombined
  } from '../QuickD3Chart';
import { QuickD3ChartData, QuickD3ChartDataItem } from '../QuickD3Chart/types';
import { BAR_COLOR } from '../../constants/style';
import { IndicatorData } from '../../services/fetchIndicatorData';
// import classnames from 'classnames'

const IndicatorCard: React.FC<IndicatorData> = ({
    // isFeatured=false,
    topic,
    indicatorName,
    indicatorVal,
    timeseriesData,
    timeseriesDate,
    derivedTimeseriesData,
    timeseriesDataLabel,
    source,
    link,
}: IndicatorData) => {

    const data4BarChart: QuickD3ChartData = timeseriesData.map((value, i)=>{

        const data = {
            key: i.toString(),
            value,
            label: timeseriesDate[i],
            additionalValue: derivedTimeseriesData[i]
        } as QuickD3ChartDataItem

        return data
    })

    const getSourceLink = (source:string)=>{
        if(source.toLowerCase() !== 'NOAA National Weather Service'.toLowerCase()){
            return source
        }

        return <a href='https://weather.gov' target='_blank'>{source}</a>
    }

    return (
        <div className='text-custom-primary w-full'>
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
                            data4Bars={data4BarChart}
                            showAxis={false}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <span className="text-xs text-gray-400">source: {getSourceLink(source)}</span>
                </div>
                
                {/* <div className='cursor-pointer bg-gray-400 hover:bg-gray-600 text-white rounded-full px-3 py-1 flex items-center'>
                    <a className="text-xs" href={link} target="_top">More Info</a>
                </div> */}
                
            </div>
        </div>
    );
};

export default IndicatorCard;
