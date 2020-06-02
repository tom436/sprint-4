import React from 'react';

export function OrderList(props) {

    return <div className="table-container"> <table className="manage-table" >
        <thead>
            <tr>
                <th>Items</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Manage</th>

            </tr>
        </thead>
        <tbody>
            {props.shop.orders.map((order, idx) => {
                return <tr key={idx}>

                    <td>
                        <ul>
                            {order.items.map((item) => {
                                return <li key={item._id}>{item.title},</li>
                            })}
                        </ul>
                    </td>
                    <td className="date">
                        {order.createdAt}
                    </td>
                    <td>
                        ${order.totalPrice}
                    </td>
                    <td className={order.status}>
                        <h3>{order.status} </h3>
                    </td>
                    <td>
                        <button className={"accept"} onClick={() => {
                            if (order.status != 'pending') return
                            order.status = "approved"
                            props.onReact(order.shopperId,{reaction:"approved",shopName:props.shop.name})
                            props.save(props.shop)
                        }}>Accept</button>
                        <button className="decline" onClick={() => {
                            if (order.status != 'pending') return
                            order.status = "declined"
                            props.onReact(order.shopperId,{reaction:"declined",shopName:props.shop.name})
                            props.save(props.shop)
                        }}>Decline</button>

                    </td>
                </tr>
            })}
        </tbody>
    </table>
    </div>
}