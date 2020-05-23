import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';

// import ItemList from '../cmps/ItemList.jsx'
import { loadItems } from '../store/actions/itemActions'

export class ItemsPage extends React.Component {

    state = {
        items: null
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
        return (!this.state.items) ? <p>Loading</p> : <section className="main-section">
            hello items
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