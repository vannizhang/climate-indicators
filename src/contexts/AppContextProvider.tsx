import React, { useState, createContext } from 'react';
import { fetchIndicatorData, IndicatorData } from '../services/fetchIndicatorData';

type AppContextValue = {
    indicatorData:IndicatorData
};

type AppContextProviderProps = {
    children?: React.ReactNode;
};

export const AppContext = createContext<AppContextValue>(null);

const AppContextProvider: React.FC<AppContextProviderProps> = ({
    children,
}: AppContextProviderProps) => {
    const [value, setValue] = useState<AppContextValue>();

    const init = async () => {
        const indicatorData = await fetchIndicatorData();
        
        setValue({
            indicatorData
        })
    };

    React.useEffect(() => {
        init();
    }, []);

    return (
        <AppContext.Provider value={value}>
            {value ? children : null}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
