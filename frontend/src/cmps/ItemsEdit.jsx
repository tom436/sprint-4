import React from 'react';
import { connect } from 'react-redux';
import itemService from '../services/itemService';

class ItemsEdit extends React.Component {

    state = {
        item: {
            title: '',
            price: 100,
            unit: 'kg',
            shop: this.props.shop,
            description: "delicious blueberries",
            img: "https://cdn.pixabay.com/photo/2016/04/13/07/18/blueberry-1326154_960_720.jpg",
            tags: []
        }
    }

    render() {
        const { items } = this.props
        return (!items) ? <p>no items yet</p> : <div className="edit-items">
            <table>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>description</th>
                        <th>tags</th>
                        <th>price</th>
                        <th>units</th>
                        <th colSpan={2}>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        return <tr key={item._id}>
                            <td><img src={item.img} /></td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.tags}</td>
                            <td>{item.price}</td>
                            <td>{item.units}</td>
                            <td>
                                Update
                                Delete
                    </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsEdit);