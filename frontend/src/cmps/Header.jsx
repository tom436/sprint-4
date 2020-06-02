import { NavLink, Link, withRouter } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../store/actions/itemActions.js'
import { setFilter } from '../store/actions/itemActions.js'
import usreService from '../services/userService'
import history from '../history'
import { Search } from './Search'
import SocketService from '../services/SocketService';
import userService from "../services/userService";

class Header extends React.Component {

    state = {
        class: '',
        menu: '',
        filter: {
            searchValue: ''
        },
        reaction:null
    }
    componentDidMount() {
        window.addEventListener('scroll', this.getWindowHeight);
        SocketService.setup();
        SocketService.emit('shopper id', userService.getUser()._id);
        SocketService.on('react order', this.setReaction);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.getWindowHeight);
        SocketService.off('react order', this.setReaction);

    }
    setReaction=(reaction)=>{
        console.log('hi');
        this.setState({reaction})
        setTimeout(()=>{
            this.setState({reaction:null})
        },2000)
        
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
        const {reaction}=this.state
        return (
                <section className={`container flex align-center space-between main-header  ${this.state.class} ${this.props.location.pathname==='/'? 'transparent':''}`}>
                    {reaction&&<div className="reaction"><h3>{`${reaction.shopName} ${reaction.reaction} your order, the farmer will cotact you soon`}</h3></div>}
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
                        <li><NavLink to="/shop/manage/" exact>Manage farm</NavLink></li>
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
