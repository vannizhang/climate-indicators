import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import AppContextProvider from './contexts/AppContextProvider';
import { AppLayout } from './components';

(async () => {
    ReactDOM.render(
        <React.StrictMode>
            <AppContextProvider>
                <AppLayout />
            </AppContextProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
})();
