import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { IndicatorCard } from '..'
import LegendWidget from './LegendWidget'
import MapView from './MapView'
import { IndicatorCardData } from '../../constants/arcgis'

const Dashboard = () => {

    const [ selectedItemId, setSelectedItemId ] = useState<string>(IndicatorCardData[0].itemId)
    const [ selectedWebmapId, setSelectedWebmapId ] = useState<string>(IndicatorCardData[0].webmapId)

    const [shouldShowArrowButton, setShouldShowArrowButton] = useState(true)
    const chartsContainerRef = useRef<HTMLDivElement>()

    const scrollToRightEndOfChartsContainer = ()=>{
        chartsContainerRef.current.scrollLeft = chartsContainerRef.current.scrollWidth;
    }

    return (
        <div className='absolute top-0 left-0 flex flex-row md:flex-col w-full h-full'>
            <div className='relative block md:flex w-full overflow-y-auto'
                ref={chartsContainerRef}
                onScroll={setShouldShowArrowButton.bind(null, false)}
            >

                { IndicatorCardData.map(({itemId, webmapId})=>{

                    const selected = itemId === selectedItemId

                    return (
                        <div className={classNames('w-full md:w-1/3 xl:w-1/5 p-2 py-4 flex-shrink-0 cursor-auto md:cursor-pointer', {
                            // 'opacity-90': !selected,
                            'md:bg-gray-100': !selected
                        })}>
                            <IndicatorCard 
                                itemId={itemId}
                                shouldUseCreativeLabStyle={true}
                                onSelect={()=>{
                                    setSelectedItemId(itemId)
                                    setSelectedWebmapId(webmapId)
                                }}
                            />
                        </div>
                    )
                })}

                { 
                    shouldShowArrowButton && (
                        <div className='absolute right-0 top-0 bottom-0 w-20 hidden md:flex xl:hidden items-center cursor-pointer'
                            style={{
                                background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(220,220,220,1) 100%)`
                            }}
                            onClick={scrollToRightEndOfChartsContainer}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M13.207 7l9 9-9 9h-1.414l9-9-9-9z"/><path fill="none" d="M0 0h32v32H0z"/></svg>
                        </div>
                    )
                }

            </div>

            <div className='relative flex-grow hidden md:block'>
                <MapView 
                    webmapId={selectedWebmapId}
                >
                    <LegendWidget />
                </MapView>
            </div>
        </div>
    )
}

export default Dashboard