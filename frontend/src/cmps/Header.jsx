import { NavLink } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../store/actions/itemActions.js'
import { setFilter } from '../store/actions/itemActions.js'

import { withRouter } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();



class Header extends React.Component {

    state = {
        class: '',
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
        const shrinkOn = 250;

        if (distanceY >= shrinkOn) {
            this.setState({
                class: "smaller"
            })
        }
        else if (distanceY < 100) {
            this.setState({
                class: ''
            })
        }
    }

    handleChange = (ev) => {
        let { name, value } = ev.target;
        this.setState(prevState => ({ filter: { ...prevState.filter, [name]: value } }));
    }
    handleSubmit = (ev) => {
        ev.preventDefault()

        this.props.loadItems(this.state.filter);
        this.props.setFilter(this.state.filter)
        // this.props.history.push(`#/items`)
        window.location.replace(`#/items/${this.state.filter.searchValue}`)

    }


    render() {

        return (
            <section className={`main-header ${this.state.class} flex align-center space-between`}>
                <h1>Farm To You</h1>
                
                <form action="" onSubmit={this.handleSubmit}>
                    <input name="searchValue" type="text" onChange={this.handleChange} value={this.state.filter.searchValue} />
                    <button>GO</button>
                </form>

                <ul className="main-nav flex">
                    <li><NavLink to="/" exact >Home</NavLink></li>
                    <li><NavLink to="/items" exact>items</NavLink></li>
                    <li><NavLink to="/cart" exact>Cart</NavLink></li>
                    <li><NavLink to="/signup" exact>Login</NavLink></li>


                </ul>
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
    setFilter
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
