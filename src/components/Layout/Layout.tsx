// import { parseHash } from 'helper-toolkit-ts/dist/url';
import React from 'react';
import CardView from './CardView';
import { Dashboard } from '../';

const hashData = new URLSearchParams(window.location.hash.slice(1));
// item id of the feature layer
const itemId = hashData.get('id') || null;

const Layout = () => {
    return itemId 
    ? (
        <CardView 
            itemId={itemId}
        />
    )
    : (
        <Dashboard />
    );
};

export default Layout;
