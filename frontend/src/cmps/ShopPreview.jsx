import {Link} from "react-router-dom";
import React from 'react';
export function ShopPreview({ shop, imgUrl }) {//gets an image based on the search
    return (!shop) ? <p>Loading</p> :
        <div className="shop-preview">
            <Link to={`/shop/${shop.id}`}>
            <img src={imgUrl} />
            <p>{shop.name}</p>
            <p>{shop.rate}</p>
            <p>{shop.title}</p>
            </Link>
        </div>
}