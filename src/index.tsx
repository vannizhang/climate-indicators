import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import AppContextProvider from './contexts/AppContextProvider';

import { RootPage } from './pages';

(async () => {
    ReactDOM.render(
        <React.StrictMode>
            <AppContextProvider>
                <RootPage />
            </AppContextProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})();
