// just a blank webmap
export const WEB_MAP_ID = '5f3b7605b3364e7bb2416c93fae00995';

/**
 * The data for the indicator cards
 * Each object in the array corresponds to a specific environmental indicator
 *   - itemId: The ID of the feature table that contains the indicator's data
 *   - webmapId: The ID of the web map designed for visualization of the indicator
 */
export const IndicatorCardData = [
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

/**
 * The URL of the ArcGIS Portal
 * Used as the root URL for accessing ArcGIS resources
 */
export const ArcGIS_PORTAL_ROOT_URL = 'https://www.arcgis.com';
