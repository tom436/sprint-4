import { Link } from "react-router-dom";
import React from 'react';

import { connect } from 'react-redux';
import {loadItem,addToCart,addToFavorites} from '../store/actions/itemActions'
//add a msg :added to cart!
class ItemDetails extends React.Component {
    
    state={
        amount:1
    }

    componentDidMount(){
        this.props.loadItem()
    }

    onHandleChange=({target})=>{
        this.setState({amount:target.value})
    }

    render() {
        const {item} = this.props
        return (!item) ? <p>Loading</p> :
            <div className="item-details">
                {/* <button onClick={}>Back</button> */}
                <img src={item.img} />
                <p>{item.title}</p>
                <Link to={`/shop/${item.shop._id}`}>
                    <p>{item.shop.logo}</p>
                    <p>This prudoct is sold by {item.shop.name}</p>
                    <p>{item.shop.title}</p>
                    <p>*{item.shop.rate}</p>
                    <p>Check it out!</p>
                </Link>
                <p>Price:{item.price}/ {item.unit}</p>
                <input type="number" name="amount" placeHolder="1" onChange={this.onHandleChange} />
                <button onClick={() => this.props.addToCart(item._id,this.state.amount)}>Add to Cart</button>
                <button onClick={() => this.props.addToFavorites(item._id)}>Like!</button>
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
    addToCart,
    addToFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);