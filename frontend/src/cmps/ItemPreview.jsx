import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/actions/userActions'
import { Stars } from './Stars'

class ItemPreview extends React.Component {

    state = {
        amount: 1,
        animation: ''
    }

    onHandleChange = (ev) => {
        ev.stopPropagation()
        this.setState({ amount: ev.target.value })
    }
    addAnimation=()=>{
        this.setState({animation:'animated fadeIn'})
        setTimeout(()=>{
            this.setState({animation:''})
        },400)
    }

    onAddToCart = (ev) => {
        this.addAnimation()
        ev.stopPropagation()
        this.props.addToCart(this.props.item, +this.state.amount)
    }


    render() {
        const { item } = this.props
        const { shop } = item
        const { animation } = this.state
        return (!item) ? <p>Loading</p> :
            <div className={`item-preview ${animation}`} onClick={(ev) =>{
                ev.stopPropagation()
                this.props.showDetails(item)
            } }>
                <div className="img-container"><img src={item.img} /></div>
                <div className="preview-details">
                    <h3>{item.title}</h3>
                    <Link to={`/shop/${shop._id}`}>{shop.name} <Stars count={shop.rate} /></Link>
                    <div className="flex space-between align-center no-padding">
                        <div className="no-padding">Price: &#36;{item.price}/ {item.unit}</div>
                        <div>
                            <input type="number" name="amount" value={this.state.amount} 
                            onChange={this.onHandleChange} onClick={(ev)=>{
                                console.log(ev)
                                ev.stopPropagation()}} />
                        
                            <button className="fas fa-shopping-cart add-to-cart" onClick={this.onAddToCart}>
                            </button>
                        </div>
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