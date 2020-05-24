import { Link } from "react-router-dom";
import React from 'react';

import { connect } from 'react-redux';
import { loadItem } from '../store/actions/itemActions'
import { addToCart } from '../store/actions/userActions'
//add a msg :added to cart!
class ItemDetails extends React.Component {

    state = {
        amount: 1
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.loadItem(id)
    }

    onHandleChange = ({ target }) => {
        this.setState({ amount: target.value })
    }

    render() {
        const { item } = this.props
        return (!item) ? <p>Loading</p> :
            <div className="item-details">
                {/* <button onClick={}>Back</button> */}
                
                    <img src={item.img} />
                    <div className="check">
                        {item.title}
                        {item.description}
                        <p>Price:{item.price}/ {item.unit}</p>
                        <input type="number" name="amount" placeholder="1" onChange={this.onHandleChange} />
                        <button onClick={() => this.props.addToCart(item, this.state.amount)}>Add to Cart</button>
                    </div>
                        <img src={item.shop.logo} />
                        <div>
                            <p>This prudoct is sold by {item.shop.name}</p>
                            <p>{item.shop.title}</p>
                            <p>*{item.shop.rate}</p>
                            <Link to={`/shop/${item.shop._id}`}>Check it out!</Link>
                        </div>
            </div>
    }
}

const mapStateToProps = state => {
    return {
        item: state.item.currItem
    };
};

const mapDispatchToProps = {
    loadItem,
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);