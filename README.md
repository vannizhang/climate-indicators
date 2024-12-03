# Climate Indicators

Climate Indicator Dashboard and Card for National Climate Portal.

## Getting Started

1. Make sure you have a fresh version of [Node.js](https://nodejs.org/en/) and NPM installed. The current Long Term Support (LTS) release is an ideal starting point

2. Clone this repository to your computer: 
    ```sh
    git clone https://github.com/vannizhang/climate-indicators.git
    ```

3. From the project's root directory, install the required packages (dependencies):

    ```sh
    npm install
    ```

4. To run and test the app on your local machine (http://localhost:8080):

    ```sh
    # it will start a server instance and begin listening for connections from localhost on port 8080
    npm run start
    ```

5. To build the app for deployment, run:

    ```sh
    npm run build
    ```

    The deployment-ready files will be placed in the /dist directory.

## Climate Indicator Dashboard

By default, the application displays the Dashboard View, which includes:

- Climate indicator cards at the top for various topics.
- A map showing a layer associated with the selected topic.

The list of indicator cards shown in the Dashboard View is defined in [`IndicatorCardData`](./src/constants/arcgis.ts)(see example below). You can customize the cards by updating the itemId values to use your own feature tables, provided they include the required fields.

Example of `IndicatorCardData` in `./src/constants/arcgis.ts`
```js
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
```

### Required Fields for Feature Tables

Feature tables must include the following fields to populate indicator cards:

- **Topic**: Topic of the Climate Indicator (e.g., `Extreme Heat`)
- **Indicator_Name**: Name of the Indicator Value (e.g., `People under heat alerts`)
- **Indicator_Value**: Value of this indicator
- **Link**: URL to the source (e.g., `https://www.weather.gov/`)
- **Source**: Name of the source agency (e.g., `NOAA National Weather Service`)
- **Timeseries_Data**: Comma-separated values that will be used to populate the time series chart in the indicator card (e.g., `0,0,0,0,...`)
- **Timeseries_Date**: Comma-separated date strings associated with each value in the `Timeseries_Data` (e.g., `12/03/24,12/02/24,12/01/24,...`)
- **Timeseries_Label**: Label that describes the time series data (e.g., `Last 30 days`)

### Climate Indicator Card

The application supports viewing individual climate indicator cards. To access the Card View, append the feature table's itemId to the hash in the URL as follows:
```
http://localhost:8080/#id={featureTableItemId}
```

For example:
```
'http://localhost:8080/#id=aa7280ec71f74a1d88ef0fd0ab9ae627'
```