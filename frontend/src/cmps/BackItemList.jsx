import React from 'react';

export function BackItemList(props) {
    return <div className="table-container"> <table className="manage-table" >
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map((item, idx) => {
                return <tr key={idx}>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        {item.price}
                    </td>
                    <td className="buttons">
                        <button className="fas fa-times-circle" onClick={()=>{
                            props.remove(item._id)
                        }}></button>
                        <button className="fas fa-edit edit"></button>
                    </td>
                </tr>
            })}
        </tbody>
    </table>
    </div>
}

