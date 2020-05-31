import { NavLink } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../store/actions/itemActions.js'
import { setFilter } from '../store/actions/itemActions.js'
import history from '../history'

export function Footer() {
    return (
        <footer>
            <ul className="footer flex space-around align-center">
                <li><NavLink to="/" exact >Home</NavLink></li>
                <li><NavLink to="/items" exact>items</NavLink></li>
                <li><NavLink to="/cart" exact>Cart</NavLink></li>
                <li><NavLink to="/signup" exact>Login</NavLink></li>
            </ul>
        </footer>
    );
}