import { Link } from "react-router-dom";
import React from 'react';
import { ShopPreview } from '../cmps/ShopPreview.jsx'
import { connect } from 'react-redux';
import { loadItem } from '../store/actions/itemActions'
import { addToCart } from '../store/actions/userActions'

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
            <div className="item-details-container">
                <section className="flex">
                    <img src={item.img} />
                    <div className="flex column item-details ">
                        <h3>{item.title}</h3>
                        <h4>From <Link to={`/shop/${item.shop._id}`}>{item.shop.name}</Link>
                            <span><i className="far fa-star"></i>{item.shop.rate}</span></h4>
                        <p className="description">{item.description}</p>
                        <p>Price: {item.price}/ {item.unit}</p>
                        <input type="number" name="amount" placeholder="1" onChange={this.onHandleChange} />
                        <button onClick={() => this.props.addToCart(item, +this.state.amount)}>Add to Cart</button>
                    </div>
                </section>
                <h5>Visit our Farm!</h5>
                <ShopPreview shop={item.shop} />
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