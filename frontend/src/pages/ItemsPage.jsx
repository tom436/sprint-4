import { Link } from "react-router-dom";
import React from 'react';
import { connect } from 'react-redux';
import { ItemList } from '../cmps/ItemList.jsx'
import ItemModal from '../cmps/ItemModal.jsx'
import { ShopList } from '../cmps/ShopList.jsx'
import { loadItems } from '../store/actions/itemActions'
import { CategoryBar } from '../cmps/CategoryBar'
class ItemsPage extends React.Component {

    state = {
        sort: null,
        shop1: null,
        shop2: null,
        isModalHidden: false,
        modalItem: null,
        category: ''
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.loadItems()
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props.location.search !== prevProps.location.search) {
            this.loadItems()
        }
    }

    loadItems = () => {
        const query = new URLSearchParams(this.props.location.search)
        const searchValue = query.get('q')
        this.props.loadItems(searchValue, this.state.sort)
            .then(this.setShopsToShow)

    }

    onHandleChange = ({ target }) => {
        this.setState({ sort: target.value }, this.loadItems)
    }

    setShopsToShow = () => {
        const shop1 = this.props.items[0].shop
        const idx = this.props.items.findIndex(item => item.shop._id !== shop1._id)
        this.setState({ shop1: shop1 })
        if (idx !== -1 && idx !== 0) {
            const shop2 = this.props.items[idx].shop
            this.setState({ shop2: shop2 })
        }
    }

    showDetails = (item) => {
        if (item) {this.setState({ isModalHidden: false, modalItem: item },()=>{
            console.log('got to show details',this.state.isModalHidden,this.state.modalItem)
        })}
        else this.setState({ isModalHidden: true, modalItem: null })
    }

    render() {
        const { items } = this.props
        return (!items[0]) ? <p>sorry, we don't have it yet...</p> : <section className="grid-container" >
            <CategoryBar />
            <form className="">
                <label>
                    <select className="sort" name="sort" onChange={this.onHandleChange}>
                        <option value="" >Sort by</option>
                        <option value="lowToHigh" >Low to High</option>
                        <option value="highToLow" >High to Low</option>
                    </select>
                </label>
            </form>
            <ItemList items={this.props.items} showDetails={this.showDetails} />
            <section className="shops-link">
                <Link to={`/shops`}>
                    Find similar products in these shops <i className="fas fa-angle-double-right"></i>
                </Link>
            </section>
            {this.state.shop1 && !this.state.shop2 && <section className="shops-of-item">
                <div className="flex">
                    <ShopList shops={[this.state.shop1]} />
                </div>
            </section>}
            {this.state.shop2 && <section className="shops-of-item">
                <div className="flex">
                    <ShopList shops={[this.state.shop1, this.state.shop2]} />
                </div>
            </section>}
            {!this.state.isModalHidden && this.state.modalItem &&
                <ItemModal item={this.state.modalItem} showDetails={this.showDetails} />}
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