import { Link } from "react-router-dom";
import React from 'react';
export function ShopPreview({ shop }) {
    return (!shop) ? <p>Loading</p> :
        <div className="shop-preview flex">
            <img src={shop.logo} />
            <div>
                <Link to={`/shop/${shop._id}`}>
                    <div className="flex space-between">
                        <h5>{shop.name}</h5>
                        <span><i className="far fa-star"></i>{shop.rate}</span>
                    </div>
                </Link>
                <p>{shop.title}</p>
            </div>
        </div>
}