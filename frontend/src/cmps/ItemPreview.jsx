import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/userActions'

class ItemPreview extends React.Component {

    state = {
        amount: 1,
    }

    onHandleChange = (ev) => {

        ev.preventDefault()

        this.setState({ amount: ev.target.value })
    }

    onShowDetails = () => {

    }

    onAddToCart = (ev) => {
        ev.stopPropagation()
        this.props.addToCart(this.props.item, +this.state.amount)
    }

    render() {
        const { item } = this.props
        const { shop } = item
        return (!item) ? <p>Loading</p> :
            <div className="item-preview" onClick={() => this.props.showDetails(item, false)}>
                <div className="img-container"><img src={item.img} /></div>
                <p>{item.title}</p>
                <Link to={`/shop/${shop._id}`}>{shop.name}<span><i className="far fa-star"></i>{shop.rate}</span></Link>
                <div className="flex space-between align-center">
                    <p>Price:  &#36; {item.price}/ {item.unit}</p>
                    <div>
                        <input type="number" name="amount" value={this.state.amount} onChange={this.onHandleChange} />
                        <button className="fas fa-shopping-cart" onClick={this.onAddToCart}>
                        </button>
                    </div>
                </div>
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