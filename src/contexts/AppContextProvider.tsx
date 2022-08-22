import { parseHash } from 'helper-toolkit-ts/dist/url';
import React, { useState, createContext } from 'react';
import { fetchIndicatorData, IndicatorData } from '../services/fetchIndicatorData';

type AppContextValue = {
    // indicatorData:IndicatorData;
    shouldUseCreativeLabStyle?: boolean;
};

type AppContextProviderProps = {
    children?: React.ReactNode;
};

const hashData = parseHash();
// item id of the feature layer
const shouldUseCreativeLabStyle = hashData['newDesign'] || false;

export const AppContext = createContext<AppContextValue>(null);

const AppContextProvider: React.FC<AppContextProviderProps> = ({
    children,
}: AppContextProviderProps) => {
    // const [value, setValue] = useState<AppContextValue>();

    // const init = async () => {
    //     // const indicatorData = await fetchIndicatorData(ItemId);
        
    //     setValue({
    //         // indicatorData,
    //         shouldUseCreativeLabStyle: location.pathname.includes('redesign')
    //     })
    // };

    // React.useEffect(() => {
    //     init();
    // }, []);

    return (
        <AppContext.Provider value={{
            shouldUseCreativeLabStyle: location.pathname.includes('redesign') || shouldUseCreativeLabStyle
        }}>
            {/* {value ? children : null} */}
            { children }
        </AppContext.Provider>
    );
};

export default AppContextProvider;
