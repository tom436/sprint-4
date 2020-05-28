import React from 'react';

export function CartItemsList({ items, remove }) {

    return (!items) ? <p>Loading</p> :
        <React.Fragment>
            {
                items.map(item => {
                    return <li key={item._id} className="flex space-between align-center">
                        <img src={item.img} />
                        <div className="column">
                            <p className="item-title">{item.title} </p>
                            <p className="item-title">${item.totalPrice}  </p>
                            <button onClick={()=>{remove(item)}} className="fas fa-trash-alt">
                            </button>
                        </div>


                        <input type="number" onChange={() => { }} className="edit-amount" value={item.amount} /></li>
                })
            }
        </React.Fragment>
}