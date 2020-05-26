import React from 'react';
import Caruselle from '../cmps/Caruselle'
import itemService from '../services/itemService'
import { loadItems } from '../store/actions/itemActions.js'
import { loadShops } from '../store/actions/shopActions.js'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { ShopPreview } from '../cmps/ShopPreview';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Home extends React.Component {

    state = {
        demoData: '',
        tags: [
            'organic',
            'fruit',//greens
            'fruit'//Exotic
        ],
        items: [],
        shops: []
    }

    componentDidMount() {
        this.state.tags.forEach(tag => {
            this.props.loadItems(tag)
                .then(itemsSet => {
                    this.setState(prevState => ({ items: [...prevState.items, itemsSet] }))
                })
        })
        this.props.loadShops()//set amount 
        .then( shops=>this.setState({shops:shops}))

    }

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
        }
        const { shops,items, tags } = this.state
        // const { demoData } = this.state
        return (
            (!items.length >= 3) ? <p>loading</p> :
                <section className="home-page">
                    <section className="hero-image" >
                        <div className="hero-text">
                            <h3>Help the environment </h3>
                            <h3>Support your local economy </h3>
                            <h3>Get fresh, healthy produce </h3>
                        </div>
                    </section>
                    <section>
                        <Link to={`/items?q=${tags[0]}`}>Organic<i className="fas fa-angle-double-right"></i> </Link>
                        {items[0] && <Caruselle toShow={4} classN={'items-carusel'} items={items[0]} />}
                        <Link to={`/items?q=${tags[1]}`}>Fruits<i className="fas fa-angle-double-right"></i> </Link>
                        {items[1] && <Caruselle toShow={4} classN={'items-carusel'} items={items[1]} />}
                        <Link to={`/items?q=${tags[2]}`}>Fruits<i className="fas fa-angle-double-right"></i> </Link>
                        {items[2] && <Caruselle toShow={4} classN={'items-carusel'} items={items[2]} />}
                    </section>
                    {shops &&<div className="news">
                        <Link to={`/shops`}>Featured Farms<i className="fas fa-angle-double-right"></i> </Link>
                        {/* <Caruselle toShow={1} classN={'news'} shops={shops} /> */}
                        <div className={'news'}>
                            {<Slider {...settings}>
                                {shops.map(shop => {
                                   return <div key={shop._id} > <img src={shop.img} alt=""/>{shop.name} {shop.title}</div>
                                })}
                            </Slider>}
                        </div>
                    </div>}
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
    loadItems,
    loadShops
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// render() {
//     const { items } = this.props
//     const { demoData } = this.state
//     return (
//         (!items) ? 'loading' :
//             <section className="home-page">
//                 <section className="hero-image" >
//                     <div className="hero-text">
//                         <h1 >We are Farm for you</h1>
//                         <h3>Brings the farm to you</h3>
//                     </div>
//                 </section>
//                 {/* <section className="flex promo-container ">
//                     <div className="promo">
//                         <img src="https://grist.files.wordpress.com/2015/11/organic.jpg" alt="" />
//                         <div className="promo-description">
//                             <h2>Organic is good for you</h2>
//                             <button>SHOP NOW</button>
//                         </div>
//                         </div>
//                         <div className="promo">
//                             <img src="https://foodal.com/wp-content/uploads/2018/11/Your-Guide-to-Kitchen-Herbs-and-Spices-Cover.jpg" alt="" />
//                             <div className="promo-description">
//                                 <h2>Spice up </h2>
//                                 <button>SHOP NOW</button>
//                             </div>
//                         </div>
//                 </section> */}
//                 <h1>Featured Products</h1>
//                 <div className="featured flex space-between" >
//                     {demoData && demoData.map((data, idx) => {
//                         return <Link  key={idx} to={`/items?q=${data.name}`}><div className="feature-img">
//                             <img src={data.img} alt="" />
//                             <h6>shop {`${data.name}`}</h6>
//                         </div></Link> 
//                     })}
//                 </div>
//                 {items && <Caruselle toShow={4} classN={'items-carusel'} items={items} header={'Hot items'} />}
//                 <div className="news">
//                     {items && <Caruselle toShow={1} classN={'news'} items={items} header={'News'} />}
//                 </div>
//             </section>
//     );
// }
