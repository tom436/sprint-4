import { Link } from "react-router-dom";
import React from 'react';
import { Stars } from './Stars'

export function ShopPreview({ shop }) {
    return (!shop) ? <p>Loading</p> :
        <div key={shop._id} className="shop-preview flex ">

            <div className="img-container">
                <img src={shop.logo} />
            </div>
            <div>
                <div className="flex column space-evenly">
                    <h5>{shop.name}</h5>
                    <div className="flex farm-stars">
                        <Stars count={shop.rate} />
                    </div>
                </div>

                <p className="farm-title">{shop.title}</p>
            </div>

        </div>
}