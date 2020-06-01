import { NavLink, Link, withRouter } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../store/actions/itemActions.js'
import userService from '../services/userService'
import { setFilter } from '../store/actions/itemActions.js'
import history from '../history'
import { Search } from './Search'
class Header extends React.Component {

    state = {
        class: '',
        menu: '',
        filter: {
            searchValue: ''
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.getWindowHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.getWindowHeight);
    }

    getWindowHeight = () => {
        const distanceY = window.pageYOffset
        const shrinkOn = 500;

        if (distanceY > shrinkOn) {
            this.setState({
                class: "smaller",
            })
        }
        if (distanceY > 500) {
            this.setState({
                class: "smaller white"
            })
        }

        else if (distanceY < 50) {
            this.setState({
                class: ''
            })
        }
    }
    toggleMenu=(pos)=>{
        this.setState({
            menu: pos
        })
    }
    handleChange = (ev) => {
        let { name, value } = ev.target;
        this.setState(prevState => ({ filter: { ...prevState.filter, [name]: value } }));
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.setFilter(this.state.filter)
        history.push({
            pathname: '/items',
            search: `?q=${this.state.filter.searchValue}`
        })
    }

    render() {
        // var cartLength = 0;
        // this.props.cart.map(shop => shop.length)
        
        return (
                <section className={`container flex align-center space-between main-header  ${this.state.class} ${this.props.location.pathname==='/'? 'transparent':''}`}>
                    
                  <div className={`screen ${this.state.menu}`} onClick={(ev)=>{
                        this.toggleMenu('')
                    }}></div>
                    <h1 className="ffu-logo"><Link to="/"><img src={require('../imgs/logo/logo_transparent.png')}/></Link></h1>
                    
                    <Search handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.filter.searchValue}/>
                    <ul className={`main-nav flex ${this.state.menu} `} onClick={(ev)=>{
                        this.toggleMenu('')
                    }}>
                        <li><NavLink to="/items" exact>Items</NavLink></li>
                        <li><NavLink to="/farms" exact>Farms</NavLink></li>
                        <li><NavLink to="/shop/manage/" exact>Add a Farm</NavLink></li>
                        <li><NavLink className="fas fa-home" to="/" exact ></NavLink></li>
                        <li><NavLink className="fas fa-user-alt" to="/signup" exact></NavLink></li>
                        <li><NavLink className="fas fa-shopping-cart" to="/cart" exact>
                        {this.props.cartLength > 0 && <span>{this.props.cartLength}</span>}
                        </NavLink></li>
                    </ul>
                    <button onClick={(ev)=>{
                        ev.stopPropagation()
                        this.toggleMenu('menu-open')
                    }} className="fas fa-bars btn-menu"></button>

            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.item.items,
        cartLength: state.user.cartLength
    }
}
const mapDispatchToProps = {
    loadItems,
    setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
