
import React from 'react';
import itemService from '../services/itemService'
import Caruselle from '../cmps/Caruselle'
import { loadItems } from '../store/actions/itemActions.js'
import { connect } from 'react-redux';


 class Home extends React.Component {


    componentDidMount() {
        this.props.loadItems(null);
        console.log(this.props.items);
        
    }


    render() {
        const { items } = this.props
        return (
           ( !items)? 'loading':
            <section className="home-page">
                <section className="hero-image" >
                    <div className="hero-text">
                        <h1 >We are Farm for you</h1>
                        <p>Brings the farm to you</p>
                    </div>
                </section>
                {items && <Caruselle toShow={3} classN={'items-carusel'} items={items} header={'New items'} />}
                {items && <Caruselle toShow={3} classN={'items-carusel'} items={items} header={'Hot items'} />}
                {items && <Caruselle toShow={3}  classN={'items-carusel'} items={items} header={'Sale items'} />}

                <div className="news">
                {items && <Caruselle toShow={1} classN={'news'}  items={items} header={'News'} />}

                </div>


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
    loadItems
  }
  

  export default connect(mapStateToProps, mapDispatchToProps)(Home)
