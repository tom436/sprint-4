import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/userActions'

class ItemPreview extends React.Component {

    state = {
        amount: 1
    }

    onHandleChange = ({ target }) => {
        this.setState({ amount: target.value })
    }

    render() {
        const { item } = this.props
        return (!item) ? <p>Loading</p> :
            <div className="item-preview">
                <Link to={`/item/${item._id}`}><img src={item.img} /><p>{item.title}</p></Link>
                <Link to={`/shop/${item.shop._id}`}>{item.shop.name}<span><i className="far fa-star"></i>{item.shop.rate}</span></Link>
                <p>Price: {item.price}/ {item.unit}</p>
                <input type="number" name="amount" value={this.state.amount} onChange={this.onHandleChange} />
                <button onClick={() => this.props.addToCart(item, +this.state.amount)}><i className="fas fa-shopping-cart"></i></button>
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