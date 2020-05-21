import itemService from '../services/itemService.js'
import ItemList from '../pages/ItemList.jsx'

export class ShopDetails extends React.Component {

    state = {
        items:null
    }

    componentDidMount() {
        this.loadItems()
    }

    loadItems() {
        itemService.query(this.state.filterBy)
            .then(items => {
                this.setState({ items })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadItems())
    }

    render() {
        return (!this.state.items)? Loading : <section className="main-section">
            <section ></section>


        </section>
    }

}

