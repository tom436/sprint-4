import React from 'react';
import ItemPreview from '../cmps/ItemPreview.jsx'
import { checkPropTypes } from 'prop-types';

export function ItemList(props) {
    return (!props.items) ? <p>Loading</p> :
        <div className="item-list">
            {props.items.map(item => <ItemPreview key={item._id} item={item} showDetails={props.showDetails} />)}
        </div>
}