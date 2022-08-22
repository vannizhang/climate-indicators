import React, { useContext } from 'react';
import { numberWithCommas } from 'helper-toolkit-ts/dist/number';
import {
    BarLineCombined
  } from '../QuickD3Chart';
import { QuickD3ChartData, QuickD3ChartDataItem } from '../QuickD3Chart/types';
import { BAR_COLOR, BAR_COLOR_CREATIVE_LAB } from '../../constants/style';
import { IndicatorData } from '../../services/fetchIndicatorData';
import { AppContext } from '../../contexts/AppContextProvider';
import classNames from 'classnames';
// import classnames from 'classnames'

type Props = {
    data: IndicatorData;
    shouldUseCreativeLabStyle?: boolean;
}

const IndicatorCard: React.FC<Props> = ({
    // isFeatured=false,
    data,
    shouldUseCreativeLabStyle=false
}: Props) => {

    const {
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
    } = data

    // const { shouldUseCreativeLabStyle } = useContext(AppContext)

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
    
        return <a 
            href={link} 
            target='_blank' 
            className={classNames({
                'text-gray-400': !shouldUseCreativeLabStyle,
                'text-custom-link-create-lab': shouldUseCreativeLabStyle
            })}
        >
            {source}
        </a>
    }

    return (
        <div 
            className={classNames('w-full', {
                'text-custom-primary': !shouldUseCreativeLabStyle,
                'text-custom-primary-create-lab': shouldUseCreativeLabStyle
            })}
        >
            {
                <div className={classNames("border-b pb-1", {
                    "border-gray-300": !shouldUseCreativeLabStyle,
                    "border-custom-primary-create-lab": shouldUseCreativeLabStyle
                })}>
                    <span 
                        style={{
                            fontSize: 32,
                            fontWeight: 400,
                            lineHeight: shouldUseCreativeLabStyle ? '38px' : 'auto'
                        }}
                    >{topic}</span>
                </div>
            }

            <div className={classNames({
                "flex": !shouldUseCreativeLabStyle,
                "block": shouldUseCreativeLabStyle,
                "py-5": shouldUseCreativeLabStyle,
                "py-2": !shouldUseCreativeLabStyle
            })}>
                <div
                    className={classNames({
                        "w-2/5": !shouldUseCreativeLabStyle,
                        "w-full": shouldUseCreativeLabStyle
                    })}
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

                <div className={classNames({
                    "w-3/5": !shouldUseCreativeLabStyle,
                    "w-full": shouldUseCreativeLabStyle,
                    'pt-4': shouldUseCreativeLabStyle
                })}>
                    {
                        timeseriesDataLabel ? (
                            <div 
                                className={classNames('text-sm', {
                                    'text-right': !shouldUseCreativeLabStyle,
                                })}
                            >{timeseriesDataLabel}</div>
                        ) : null
                    }
                    
                    <div className='w-full h-20 mt-3'>
                        <BarLineCombined 
                            // timeFormatSpecifier='%b %d'
                            barColor={BAR_COLOR}
                            data4Bars={data4BarChart}
                            showAxis={false}
                        />
                    </div>
                </div>
            </div>

            <div 
                className={classNames("mt-1")}
            >
                <span
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
                
                {/* <div className='cursor-pointer bg-gray-400 hover:bg-gray-600 text-white rounded-full px-3 py-1 flex items-center'>
                    <a className="text-xs" href={link} target="_top">More Info</a>
                </div> */}
                
            </div>
        </div>
    );
};

export default IndicatorCard;
