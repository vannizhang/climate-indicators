import { parseHash } from 'helper-toolkit-ts/dist/url';
import React from 'react';
import CardView from './CardView';
import DashboardView from './DashboardView';

const hashData = parseHash();
// item id of the feature layer
const itemId = hashData['id'] || null;

const Layout = () => {
    return itemId 
    ? (
        <CardView />
    )
    : (
        <DashboardView />
    );
};

export default Layout;
