import ItemPreview from '../cmps/ItemPreview.jsx'
import React from 'react';
 
export function ItemList({ items }) {
    return (!items) ? <p>Loading</p> :
        <div className="item-list">
            {items.map(item=><ItemPreview key={item._id} item={item}/>)}
        </div>
}