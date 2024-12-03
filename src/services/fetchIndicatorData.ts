import { parseHash } from 'helper-toolkit-ts/dist/url'
// import {
//     getItem
// } from "@esri/arcgis-rest-portal";

import {
    queryFeatures,
    IQueryFeaturesResponse
} from "@esri/arcgis-rest-feature-layer";

export type IndicatorData = {
    topic: string;
    indicatorName: string;
    indicatorVal: number;
    timeseriesData: number[];
    timeseriesDate: string[];
    // time series data derived from original time series data, e.g. % of population using the total population
    derivedTimeseriesData?: string[];
    timeseriesDataLabel?: string;
    source: string;
    link?: string;
}

// const hashData = parseHash();
// item id of the feature layer
// const ItemId = hashData['id'] || null;

type FieldName = 'Indicator_Name' | 'Indicator_Value' | 'Link' | 'Source' | 'Timeseries_Data' | 'Timeseries_Label' | 'Topic' | 'Timeseries_Date';

export const fetchIndicatorData = async(itemId: string):Promise<IndicatorData>=>{

    if(!itemId){
        return null
    }
    
    try {
        const fetchItemRes = await fetch(`https://www.arcgis.com/sharing/rest/content/items/${itemId}?f=json`)

        const item = await fetchItemRes.json();

        const url = item.url + '/0';

        const outFields:FieldName[] = [
            'Indicator_Name', 'Indicator_Value', 'Link', 'Source', 'Timeseries_Data', 'Timeseries_Label', 'Timeseries_Date', 'Topic'
        ]

        const res = await queryFeatures({
            url,
            outFields
        }) as IQueryFeaturesResponse;

        if(!res.features || !res.features.length){
            return null
        }

        const attributes = res.features[0].attributes as Record<FieldName, string>;

        const {
            Topic,
            Indicator_Name,
            Indicator_Value,
            Link,
            Source,
            Timeseries_Data,
            Timeseries_Date,
            Timeseries_Label
        } = attributes;

        const timeseriesData = Timeseries_Data 
            ? Timeseries_Data.split(',').reverse().filter(d=>d).map(d=>+d)
            : []

        const timeseriesDate = Timeseries_Date 
            ? Timeseries_Date.split(',').reverse().filter(d=>d)
            : []

        let derivedTimeseriesData: string[] = [];

        // need to replace this hard coded data using a more generic method
        if(itemId === 'aa7280ec71f74a1d88ef0fd0ab9ae627'){

            const US_TOTAL_POPULATION_2022 = 332403650;

            derivedTimeseriesData = timeseriesData.map(num=>{
                return Math.floor((num / US_TOTAL_POPULATION_2022) * 100).toString() + '%'
            })
        }

        const indicatorData:IndicatorData = {
            topic: Topic,
            indicatorName: Indicator_Name,
            indicatorVal: +Indicator_Value,
            timeseriesData,
            timeseriesDate,
            derivedTimeseriesData,
            timeseriesDataLabel: Timeseries_Label,
            source: Source,
            link: Link
        }

        console.log(attributes);

        return indicatorData;

    } catch(err){
        console.error(err);
        return null;
    }
}