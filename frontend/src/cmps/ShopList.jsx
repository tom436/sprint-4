import { ShopPreview } from '../cmps/ShopPreview.jsx'
import React from 'react';
import { Link } from "react-router-dom";

export function ShopList({ shops }) {
    return (!shops) ? <p>Loading</p> :
        <div className="shop-list  ">
            {shops.map((shop, idx) => <Link key={idx} to={`/shop/${shop._id}`}><ShopPreview   shop={shop} /></Link>)}
        </div>
}