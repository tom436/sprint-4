import React from 'react';

export function CartItemsList({ items, remove }) {

    return (!items) ? <p>Loading</p> :

        items.map(item => {
            return <li key={item._id} className="flex cart-item space-between align-center">
                <div className="img-container">
                    <img src={item.img} />
                </div>
                <div >
                    <p className="item-title">{item.title} </p>
                    <p>Qty: {item.amount}</p>
                    <p className="item-title">Total: ${item.totalPrice}</p>
                </div>
                <button onClick={() => { remove(item) }} className="fas fa-trash-alt"></button>


            </li>
        })

}