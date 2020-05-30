import React from 'react';
import Caruselle from '../cmps/Caruselle'
import { loadItems } from '../store/actions/itemActions.js'
import { loadShops } from '../store/actions/shopActions.js'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { ShopPreview } from '../cmps/ShopPreview';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoryBar } from '../cmps/CategoryBar'
import { Search } from '../cmps/Search'

class Home extends React.Component {

    state = {
        demoData: '',
        tags: [
            'fruits',
            'organic',//greens
        ],
        items: [],
        shops: [],
        filter: {
            searchValue: ''
        }
    }

    componentDidMount() {
        this.state.tags.forEach(tag => {
            this.props.loadItems( tag )
                .then(itemsSet => {
                    this.setState(prevState => ({ items: [...prevState.items, itemsSet] }))
                })
        })
        this.props.loadShops()//set amount 
            .then(shops => this.setState({ shops: shops }))

    }
    handleChange = (ev) => {
        let { name, value } = ev.target;
        this.setState(prevState => ({ filter: { ...prevState.filter, [name]: value } }));
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/items?q=${this.state.filter.searchValue}`)

    }

    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
        }
        const { shops, items, tags } = this.state
        // const { demoData } = this.state
        return (
            (!items.length >= 3) ? <p>loading</p> :
                <section className="home-page">
                    <section className="hero-image" >
                        <div className="hero-text">
                            <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.filter.searchValue} isHome='home-search' />

                        </div>
                    </section>
                    <section className="grid-container">

                        <Link className="category" to={`/items?q=${tags[0]}`}>{`${tags[0]} `} <span className="see-all">See All</span> <span className="fas fa-arrow-right arrow"></span> </Link>
                        {items[0] && <Caruselle toShow={4} classN={'items-carusel'} items={items[0]} />}
                        <Link className="category" to={`/items?q=${tags[1]}`}>{`${tags[1]} `} <span className="see-all">See All</span> <span className="fas fa-arrow-right arrow"></span> </Link>
                        {items[1] && <Caruselle items={items[1]} />}
                        <div className="offers-container">
                            <div className="img-container meat-img">
                            <Link to="/items?q=meat">
                                </Link>
                                <h2>Meat</h2>
                            </div>
                            <div className="img-container cheese-img">
                            <Link to="/items?q=cheese">
                                </Link>
                                <h2>Cheese</h2>

                            </div>
                            <div className="img-container bread-img">
                                <Link to="/items?q=bread">
                                </Link>
                                <h2>Bread</h2>
                            </div>
                        </div>
                        <Link to="/items?q=root">
                            <div className="collage-container">
                                <div className="img-container main-img">
                                    <h2>Find Your Roots</h2>
                                </div>
                                <div className="img-container second-img">

                                </div>
                                <div className="img-container third-img">
                                </div>
                            </div>
                        </Link>

                    </section>

                    {/* <section>
                        <Link to={`/items?q=${tags[0]}`}>Organic<i className="fas fa-angle-double-right"></i> </Link>
                        {items[0] && <Caruselle toShow={4} classN={'items-carusel'} items={items[0]} />}
                        <Link to={`/items?q=${tags[1]}`}>Fruits<i className="fas fa-angle-double-right"></i> </Link>
                        {items[1] && <Caruselle toShow={4} classN={'items-carusel'} items={items[1]} />}
                        <Link to={`/items?q=${tags[2]}`}>Fruits<i className="fas fa-angle-double-right"></i> </Link>
                        {items[2] && <Caruselle toShow={4} classN={'items-carusel'} items={items[2]} />}
                    </section>
                    {shops &&<div className="news">
                        <Link to={`/shops`}>Featured Farms<i className="fas fa-angle-double-right"></i> </Link> */}
                    {/* <Caruselle toShow={1} classN={'news'} shops={shops} /> */}
                    {/* <div className={'news'}>
                            {<Slider {...settings}>
                                {shops.map(shop => {
                                   return <div key={shop._id} > <img src={shop.img} alt=""/>{shop.name} {shop.title}</div>
                                })}
                            </Slider>}
                        </div>
                    </div>} */}
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
