import { Link } from "react-router-dom";
<<<<<<< HEAD
import {addToCart} from '../store/actions/userActions'
=======
import React from 'react';
import { connect } from 'react-redux';

import {addToCart,addToFavorites} from '../store/actions/itemActions'
>>>>>>> c00825a3541ba39f67e4a381077efa1827667dd3
//add a msg :added to cart!
 class ItemPreview extends React.Component {

    state={
        amount:1
    }

    // componentDidMount(){
    //     this.props.loadItem()
    // }

    onHandleChange=({target})=>{
        this.setState({amount:target.value})
    }

    render() {
        const {item} = this.props
        return (!item) ? <p>Loading</p> :
            <div className="item-preview">
                <img src={item.img} />
                <p>{item.title}</p>
                <Link to={`/shop/${item.shop.id}`}>{item.shop.name}<span>*{item.shop.rate}</span></Link>
                <p>Price:{item.price}/ {item.unit}</p>
<<<<<<< HEAD
                <input type="number" name="amount" placeHolder="1" onChange={this.onHandleChang} />
                <button onClick={() => addToCart(item._id,this.state.amount)}>Add to Cart</button>
=======
                <input type="number" name="amount" placeholder="1" onChange={this.onHandleChang} />
                <button onClick={() => this.props.addToCart(item._id,this.state.amount)}>Add to Cart</button>
                <button onClick={() => this.props.addToFavorites(item._id)}>Like!</button>
>>>>>>> c00825a3541ba39f67e4a381077efa1827667dd3
            </div>
    }
}


const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = {
    addToCart,
    addToFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPreview);
// export default connect(mapDispatchToProps)(ItemPreview);


// export function ItemPreview({ item, addToCart, addToFavorites }) {
//     var amount = 1;
//     return (!item) ? Loading :
//         <div className="item-preview">
//             <img src={item.img} />
//             <p>{item.title}</p>
//             <Link to={`/shop/${item.shop.id}`}>{item.shop.name}<span>*{item.shop.rate}</span></Link>
//             <p>Price:{item.price}/ {item.unit}</p>
//             <input type="number" name="amount" placeHolder="1" onChange={({ target }) => amount = target.value} />
//             <button onClick={() => addToCart(item._id)}>Add to Cart</button>
//             <button onClick={() => addToFavorites(item._id, amount)}>Like!</button>
//         </div>
// }