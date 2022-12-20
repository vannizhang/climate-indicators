import React, { useContext } from 'react';
import { numberWithCommas } from 'helper-toolkit-ts/dist/number';
import {
    BarLineCombined
  } from '../QuickD3Chart';
import { QuickD3ChartData, QuickD3ChartDataItem } from '../QuickD3Chart/types';
import { BAR_COLOR } from '../../constants/style';
import { IndicatorData } from '../../services/fetchIndicatorData';
// import { AppContext } from '../../contexts/AppContextProvider';
import classNames from 'classnames';
// import classnames from 'classnames'

type Props = {
    data: IndicatorData;
    shouldShowChart?: boolean
    shouldUseCreativeLabStyle?: boolean;
}

const IndicatorCard: React.FC<Props> = ({
    // isFeatured=false,
    data,
    shouldShowChart=true,
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
        // drought
        else if(source.toLowerCase() === 'NOAA/NIDIS Drought.gov'.toLowerCase()){
            link = 'https://drought.gov/';
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
            <div>
                <span className='font-semibold text-xl'>{topic}</span>
            </div>

            <div className={classNames('mt-2', {
                "flex": !shouldUseCreativeLabStyle,
                "block": shouldUseCreativeLabStyle,
                // "py-5": shouldUseCreativeLabStyle,
                // "py-2": !shouldUseCreativeLabStyle
            })}>
                <div
                    className={classNames('flex items-center justify-between', {
                        "w-2/5": !shouldUseCreativeLabStyle,
                        "w-full": shouldUseCreativeLabStyle
                    })}
                >
                    <div className="">
                        <span className='text-sm'>
                            {indicatorName}
                        </span>
                    </div>

                    <div>
                        <span className='font-semibold text-lg'>
                            {numberWithCommas(indicatorVal)}
                        </span>
                    </div>
                </div>

                {
                    shouldShowChart && (
                        <div className={classNames({
                            "w-3/5": !shouldUseCreativeLabStyle,
                            "w-full": shouldUseCreativeLabStyle,
                            'pt-2': shouldUseCreativeLabStyle
                        })}>
                            {
                                timeseriesDataLabel ? (
                                    <div 
                                        className={classNames('text-xs', {
                                            'text-right': !shouldUseCreativeLabStyle,
                                        })}
                                    >{timeseriesDataLabel}</div>
                                ) : null
                            }
                            
                            <div className='w-full h-20 mt-3 border-b border-gray-200'>
                                <BarLineCombined 
                                    // timeFormatSpecifier='%b %d'
                                    barColor={BAR_COLOR}
                                    data4Bars={data4BarChart}
                                    showAxis={false}
                                />
                            </div>
                        </div>
                    )
                }
            </div>

            <div 
                className={classNames("mt-3 text-xs")}
            >
                <span>Source: </span>
                <span>
                    {getSourceLink(source)}
                </span>
            </div>
        </div>
    );
};

export default IndicatorCard;
