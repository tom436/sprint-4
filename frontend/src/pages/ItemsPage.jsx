import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { ItemList } from '../cmps/ItemList.jsx'
import { ShopPreview } from '../cmps/ShopPreview.jsx'
import { loadItems } from '../store/actions/itemActions'

class ItemsPage extends React.Component {

    state = {
        sort: null,
        shop1: null,
        shop2: null
    }

    componentDidMount() {
        
        const query = new URLSearchParams(this.props.location.search)
        
        const searchValue=query.get('q')
        
        this.props.loadItems({searchValue:searchValue}, this.state.sort)
        .then(items => {
            if(items[0])this.setState({ shop1: items[0].shop})
            if(items[1])this.setState({ shop2: items[1].shop }) 
        })
        .catch(console.log('no products found'))
      
        //  this.props.loadShops({searchValue:searchValue})
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.search !== prevProps.location.search) {
            const filterM = this.props.match.params.q
            this.props.loadItems(filterM, this.state.sort)
        }
    }

    onHandleChange = ({ target }) => {
        const filter = { searchValue: this.props.match.params.q }
        this.setState({ sort: target.value })
        this.props.loadItems(filter, this.state.sort)
            .then(items => {
                this.setState({ shop1: items[0].shop, shop2: items[1].shop })
            })
    }

    render() {
        return (!this.props.items[0]) ? <p>sorry, we don't have it yet...</p> : <section className="items-page">
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
            <section className="shops-of-item flex space-around">
                {this.state.shop1&&<ShopPreview shop={this.state.shop1} />}
                {this.state.shop2&&<ShopPreview shop={this.state.shop2} />}
            </section>
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