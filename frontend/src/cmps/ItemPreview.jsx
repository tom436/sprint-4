import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/userActions'

class ItemPreview extends React.Component {

    state = {
        amount: 1,
    }

    onHandleChange = ({ target }) => {
        this.setState({ amount: target.value })
    }

    render() {
        const { item } = this.props
        console.log('item',item);
        
        const {shop} = item
        return (!item) ? <p>Loading</p> :
            <div className="item-preview">
                <Link to={`/item/${item._id}`}><img src={item.img} /><p>{item.title}</p></Link>
                <Link to={`/shop/${shop._id}`}>{shop.name}<span><i className="far fa-star"></i>{shop.rate}</span></Link>
                <p>Price:  &#36; {item.price}/ {item.unit}</p>
                <input type="number" name="amount" value={this.state.amount} onChange={this.onHandleChange} />
                <button  className="fas fa-shopping-cart add-to-cart" onClick={() => this.props.addToCart(item, +this.state.amount)}> Add to cart</button>
            </div>
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPreview);