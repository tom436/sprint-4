// import ItemPreview from '../cmps/ItemPreview.jsx'
import React from 'react';

export function ItemList({ items, addToCart, addToFavorites }) {
    return (!items) ?' Loading' :
        <div className="item-list">
            {/* {items.map(item=><ItemPreview item={item} addToCart={addToCart}  addToFavorites={addToFavorites}/>)} */}
        </div>
}