import { parseHash } from 'helper-toolkit-ts/dist/url';
import React from 'react';
import CardView from './CardView';
import { Dashboard } from '../';

const hashData = parseHash();
// item id of the feature layer
const itemId = hashData['id'] || null;

const Layout = () => {
    return itemId 
    ? (
        <CardView />
    )
    : (
        <Dashboard />
    );
};

export default Layout;
