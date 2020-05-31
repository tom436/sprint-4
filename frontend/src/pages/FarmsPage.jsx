import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { ShopPreview } from '../cmps/ShopPreview.jsx'
import { loadShops } from '../store/actions/shopActions'
class FarmsPage extends React.Component {

    state = {

    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.loadShops()
    }





    render() {
        const {shops} =this.props
        
        return <section className="grid-container">
            <h2>Our Farms</h2>
            <div className="farms-container">
            {shops&&shops.map((shop,idx)=>{
                return<Link key={idx} to={`/shop/${shop._id}`}><ShopPreview   shop={shop} /></Link>
            })}
            </div>
        </section>
   
    }
}

const mapStateToProps = state => {
    return {
        shops: state.shop.shops
    };
};

const mapDispatchToProps = {
    loadShops
};

export default connect(mapStateToProps, mapDispatchToProps)(FarmsPage);