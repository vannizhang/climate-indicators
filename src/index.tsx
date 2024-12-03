import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

// import AppContextProvider from './contexts/AppContextProvider';
import { AppLayout } from './components';

(async () => {

    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <AppLayout />
        </React.StrictMode>
    );
})();
