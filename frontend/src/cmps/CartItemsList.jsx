import React from 'react';

export function CartItemsList({ items,remove }) {
    console.log(items);
    
    return (!items) ? <p>Loading</p> :
       <React.Fragment>
                {
                    items.map(item => {
                        return <li key={item._id} className="flex space-between align-center">
                            <img src={item.img} />
                            {item.title},{item.totalPrice}
                            <button onClick={() => {remove(item) }}>
                                remove</button>
                            <input type="number" onChange={() => { }} className="edit-amount" value={item.amount} /></li>
                    })
                }
        </React.Fragment>
}