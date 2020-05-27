import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { ItemList } from '../cmps/ItemList.jsx'
import { ShopList } from '../cmps/ShopList.jsx'
import { loadItems } from '../store/actions/itemActions'

class ItemsPage extends React.Component {

    state = {
        sort: null,
        shop1:null,
        shop2:null
    }

    componentDidMount() {
        this.loadItems()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.search !== prevProps.location.search) {
            this.loadItems()
        }
    }

    loadItems=()=> {
        const query = new URLSearchParams(this.props.location.search)
        const searchValue = query.get('q')
        this.props.loadItems(searchValue, this.state.sort)
            .then(this.setShopsToShow)
    }

    onHandleChange = ({ target }) => {
        this.setState({ sort : target.value },this.loadItems)
    }

    setShopsToShow=()=>{
        const shop1 = this.props.items[0].shop
        const idx = this.props.items.findIndex(item=> item.shop._id !== shop1._id)
        const shop2 = this.props.items[idx].shop
        this.setState({shop1:shop1,shop2:shop2})
    }

    render() {
        const {items} =this.props
        
        return (!items[0]||!this.state.shop2) ? <p>sorry, we don't have it yet...</p> : <section className="items-page">
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
            <ItemList items={this.props.items} />
            <section className="shops-link">
                <Link to={`/shops`}>
                    Find similar products in these shops <i className="fas fa-angle-double-right"></i>
                </Link>
            </section>
            <ShopList shops={[this.state.shop1, this.state.shop2]}/>
            
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