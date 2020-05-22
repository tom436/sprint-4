import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';

import {ItemList} from '../cmps/ItemList.jsx'
import { loadItems } from '../store/actions/itemActions'

class ItemsPage extends React.Component {

    state = {
        sort:1,
    }

    componentDidMount() {
        const filter ={searchValue : this.props.match.params.q} 
        console.log(filter);
        this.props.loadItems(filter)
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadItems())
    }

    render() {
        return (!this.props.items) ? <p>Loading</p> : <section className="main-section">
            <form>
                <label>Sort by Price
                    <select name="sort">
                        <option value={1} >Low to High</option>
                        <option value={-1} >High to Low</option>
                    </select>
                </label>
                <label>Minimum Price</label>
                <label>Maximum Price</label>
                <label>Categories</label>
            </form>
            
            <ItemList items={this.props.items}/>
        </section>
    }

}

const mapStateToProps = state => {
    return {
        items: state.item.items,
        filter: state.item.filter
    };
};

const mapDispatchToProps = {
    loadItems
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);