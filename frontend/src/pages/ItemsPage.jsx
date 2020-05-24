import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import {ItemList} from '../cmps/ItemList.jsx'
import {ShopPreview} from '../cmps/ShopPreview.jsx'
import { loadItems } from '../store/actions/itemActions'
import itemService from '../services/itemService.js'
//add shop preview

class ItemsPage extends React.Component {

    state = {
        sort:null
        
    }

    componentDidMount() {
        const filter ={searchValue : this.props.match.params.q} 
        this.props.loadItems(filter,this.state.sort)
        // this.props.loadShops(filter)
    }

    onHandleChange=({target})=>{
        const filter ={searchValue : this.props.match.params.q} 
        this.setState({sort:target.value})
        this.props.loadItems(filter,this.state.sort)
    }

    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, () => this.loadItems())
    // }

    render() {
        return (!this.props.items) ? <p>Loading</p> : <section className="items-page">
            <form>
                <label>Sort by Price: 
                    <select name="sort" onChange={this.onHandleChange}>
                        <option value="" >sort by</option>
                        <option value="lowToHigh" >Low to High</option>
                        <option value="highToLow" >High to Low</option>
                    </select>
                </label>
                {/* <label>Minimum Price: 
                    <input name="maxPrice" type="number"/>
                </label>
                <label>Maximum Price: 
                    <input name="minPrice" type="number"/>
                </label> */}
            </form>
            <ItemList items={this.props.items}/>
            <ShopPreview shop={this.state.shop1}/>
            <ShopPreview shop={this.state.shop2}/>
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