import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { loadItem } from '../store/actions/itemActions'
import { addToCart } from '../store/actions/userActions'
import { Stars } from "./Stars.jsx";

class ItemModal extends React.Component {//props= item, 

    state = {
        amount: 1
    }

    onHandleChange = (ev) => {
        ev.stopPropagation()
        this.setState({ amount: ev.target.value })
    }

    render() {
        const { item } = this.props
        return (!item) ? <p>Loading</p> :
            <div className="item-details-container block flex " >
                <div className="item-details-modal ">
                    <div className="close-btn"><button onClick={() => { this.props.showDetails(null) }}>&times;</button></div>
                    <div  className="item-container flex justify-center align-center">
                    <div className="img-container"><img src={item.img} /></div>
                    </div>
                    <div className="item-details flex column">
                        <h3>{item.title}</h3>
                        <div className="modal-shop">
                            <h4>From <Link to={`/shop/${item.shop._id}`}>{item.shop.name}</Link></h4>
                                <Stars count={item.shop.rate}/>
                            <p>{item.shop.title}</p>
                            <img src={item.shop.logo} />
                        </div>
                        <p className="description">{item.description}</p>
                        <p>Price: &#36;{item.price}/ {item.unit}</p>
                        <p className="input">
                        <label>quantity:</label>
                        <input type="number" name="amount" value={this.state.amount} onChange={this.onHandleChange} />
                        </p>
                        <button className="add-btn" onClick={() => {
                            this.props.addToCart(item, this.state.amount)
                            this.props.showDetails(null)
                        }}>Add to Cart</button>
                    </div>
                </div>
            </div>
    }
}

const mapStateToProps = state => {
    return {
        // item: state.item.currItem,
        shop: state.shop.currShop
    };
};

const mapDispatchToProps = {
    loadItem,
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);