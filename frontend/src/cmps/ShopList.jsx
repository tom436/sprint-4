import {ShopPreview} from '../cmps/ShopPreview.jsx'
import React from 'react';
 
export function ShopList({ shops }) {
    return (!shops) ? <p>Loading</p> :
        <div className="shop-list">
            {shops.map(shop=><ShopPreview key={shop._id} shop={shop}/>)}
        </div>
}