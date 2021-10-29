import { parseHash } from 'helper-toolkit-ts/dist/url'
import {
    getItem
} from "@esri/arcgis-rest-portal";

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
    timeseriesDataLabel?: string;
    source: string;
    link?: string;
}

const hashData = parseHash();
// item id of the feature layer
const ItemId = hashData['id'] || null;

type FieldName = 'Indicator_Name' | 'Indicator_Value' | 'Link' | 'Source' | 'Timeseries_Data' | 'Timeseries_Label' | 'Topic' | 'Timeseries_Date';

export const fetchIndicatorData = async():Promise<IndicatorData>=>{

    if(!ItemId){
        return null
    }
    
    try {
        const item = await getItem(ItemId);

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

        const indicatorData:IndicatorData = {
            topic: Topic,
            indicatorName: Indicator_Name,
            indicatorVal: +Indicator_Value,
            timeseriesData,
            timeseriesDate,
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