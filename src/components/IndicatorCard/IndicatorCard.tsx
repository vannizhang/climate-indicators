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

        let link = ''

        // heat
        if(source.toLowerCase() === 'NOAA National Weather Service'.toLowerCase()){
            link = 'https://weather.gov';
        }
        // drought
        else if (source.toLowerCase() === 'NIDIS/US Dept. Agriculture'.toLowerCase()){
            link = 'https://drought.gov';
        }
        // wildfire
        else if (source.toLowerCase() === 'National Interagency Fire Center'.toLowerCase()){
            link = 'https://www.nifc.gov/';
        }

        if(!link){
            return source
        }

        return <a href={link} target='_blank' className='text-custom-link'>{source}</a>
    }

    return (
        <div className='text-custom-primary w-full'>
            <div className="border-b border-custom-primary pb-4"
            >
                <span 
                    style={{
                        fontSize: 32,
                        fontWeight: 400,
                        lineHeight: '38px'
                    }}
                >{topic}</span>
            </div>

            <div className="flex py-5">
                <div
                    className=' w-2/5'
                >
                    <div
                        style={{
                            marginBottom: '0.375rem'
                        }}
                    >
                        <span style={{
                            lineHeight: '46px',
                            fontSize: 40,
                            fontWeight: 400
                        }}>
                            {numberWithCommas(indicatorVal)}
                        </span>
                    </div>

                    <div className="">
                        <span 
                            style={{
                                lineHeight: '28px',
                                fontSize: 24,
                                fontWeight: 300
                            }}
                        >
                            {indicatorName}
                        </span>
                    </div>
                </div>

                <div className="w-3/5">
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

            <div className="flex justify-between items-center mt-2">
                <div>
                    <span className="text-custom-primary"
                        style={{
                            lineHeight: '18px',
                            fontSize: 14,
                            fontWeight: 400
                        }}
                    >Source: </span>
                    <span
                        style={{
                            lineHeight: '18px',
                            fontSize: 14,
                            fontWeight: 500
                        }}
                    >
                        {getSourceLink(source)}
                    </span>
                </div>
                
                {/* <div className='cursor-pointer bg-gray-400 hover:bg-gray-600 text-white rounded-full px-3 py-1 flex items-center'>
                    <a className="text-xs" href={link} target="_top">More Info</a>
                </div> */}
                
            </div>
        </div>
    );
};

export default IndicatorCard;
