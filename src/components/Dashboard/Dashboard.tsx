import classNames from 'classnames'
import React, { useState } from 'react'
import { IndicatorCard } from '..'
import LegendWidget from './LegendWidget'
import MapView from './MapView'

const IndicatorCardData = [
    {
        // extreme heat
        itemId: 'aa7280ec71f74a1d88ef0fd0ab9ae627', // item id of the feature table prepared by Gonzalo that provides indicator data
        webmapId: '0a5fe1d4de9d4a7783708e2d5c2115b2' // item id of the web map that prepared by Dan Pisut
    },
    {
        // drought
        itemId: '637947a9288e4ba3ba812722ef30d98f',
        webmapId: 'ce4ffdac4def47de9578ca718277852e'
    },
    {
        // wildfire
        itemId: '8d114323583b4331b163d15e70a01caa',
        webmapId: 'e1294742cc8e48fba4a6c17ad58e4f19'
    },
    {
        // Inland Flooding
        itemId: 'f351d92b064b4c69ac56dd155991f81a',
        webmapId: 'caffd8e5be444cfb84de0fcdd25b5214'
    },
    {
        // Coastal Flooding
        itemId: 'b7ba049c1c184853b85cb5d7d11d1d71',
        webmapId: ''
    },
]

const Dashboard = () => {

    const [ selectedItemId, setSelectedItemId ] = useState<string>(IndicatorCardData[0].itemId)
    const [ selectedWebmapId, setSelectedWebmapId ] = useState<string>(IndicatorCardData[0].webmapId)

    return (
        <div className='absolute top-0 left-0 flex flex-row md:flex-col w-full h-full'>
            <div className='block md:flex w-full overflow-y-auto scroller'>

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