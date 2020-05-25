
import React from 'react';
import Caruselle from '../cmps/Caruselle'
import itemService from '../services/itemService'

import { loadItems } from '../store/actions/itemActions.js'
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

class Home extends React.Component {

    state = {
        demoData: ''
    }

    componentDidMount() {

        this.props.loadItems(null);
        itemService.queryDemoData().then((demoData) => {
            this.setState({ demoData })

        })


    }


    render() {
        const { items } = this.props
        const { demoData } = this.state

        return (
            (!items) ? 'loading' :
                <section className="home-page">

                    <section className="hero-image" >
                        <div className="hero-text">
                            <h1 >We are Farm for you</h1>
                            <h3>Brings the farm to you</h3>
                        </div>
                    </section>
                    <section className="flex promo-container ">
                        <div className="promo">
                            <img src="https://grist.files.wordpress.com/2015/11/organic.jpg" alt="" />
                            <div className="promo-description">
                                <h2>Organic is good for you</h2>
                                <button>SHOP NOW</button>
                            </div>
                            </div>
                            <div className="promo">
                                <img src="https://foodal.com/wp-content/uploads/2018/11/Your-Guide-to-Kitchen-Herbs-and-Spices-Cover.jpg" alt="" />
                                <div className="promo-description">
                                    <h2>Spice up </h2>
                                    <button>SHOP NOW</button>
                                </div>
                            </div>
                    </section>
                    <h1>Featured Products</h1>
                    <div className="featured flex space-between" >
                        {demoData && demoData.map((data, idx) => {
                            return <Link  key={idx} to={`/items?q=${data.name}`}><div className="feature-img">
                                <img src={data.img} alt="" />
                                <h6>shop {`${data.name}`}</h6>
                            </div></Link> 
                        })}
                    </div>

                    <div className="news">
                        {items && <Caruselle toShow={1} classN={'news'} items={items} header={'News'} />}
                    </div>

                    {items && <Caruselle toShow={4} classN={'items-carusel'} items={items} header={'Hot items'} />}

   

                </section>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        items: state.item.items
    }
}
const mapDispatchToProps = {
    loadItems
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
