import { Link } from "react-router-dom";
import React from 'react';
import { ShopPreview } from '../cmps/ShopPreview.jsx'
import { connect } from 'react-redux';
import { loadItem } from '../store/actions/itemActions'
import { addToCart } from '../store/actions/userActions'

class ItemModal extends React.Component {//props= item, 

    state = {
        amount: 1
    }

    // componentDidMount() {
    //     const { id } = this.props.match.params
    //     this.props.loadItem(id,true)
    // }
    onHandleChange = ({ target }) => {
        this.setState({ amount: target.value })
    }

    render() {
        const { item } = this.props
        console.log('itemModal got', this.props);
        return (!item) ? <p>Loading</p> :
            <div className="item-details-container modal block flex " onClick={()=>{
               this.props.showDetails('',true)
            }}>
                <div className="item-details-modal flex align-center  space-evenly">
                    <div className="img-container"><img src={item.img} /></div>
                    <div className="item-details flex column">
                        <h3>{item.title}</h3>
                        <div className="modal-shop">
                            <h4>From <Link to={`/shop/${item.shop._id}`}>{item.shop.name}</Link>
                                <span><i className="far fa-star"></i>{item.shop.rate}</span></h4>
                            <p>{item.shop.title}</p>
                            <img src={item.shop.logo} />
                        </div>
                        <p className="description">{item.description}</p>
                        <p>Price: {item.price}/ {item.unit}</p>
                        <input type="number" name="amount" placeholder="1" onChange={this.onHandleChange} />
                        <button onClick={() => this.props.addToCart(item, this.state.amount)}>Add to Cart</button>
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