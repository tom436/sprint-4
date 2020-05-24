
import React from 'react';
import itemService from '../services/itemService'
import Caruselle from '../cmps/Caruselle'
import { loadItems } from '../store/actions/itemActions.js'
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

 class Home extends React.Component {

    state={
        categories:''
    }

    componentDidMount() {
        itemService.queryCategories().then(categories=>{
            this.setState({categories})
            
        })
        // this.props.loadItems(null);

    }


    render() {
        const { items } = this.props
        const {categories}=this.state
        return (
           ( !items)? 'loading':
            <section className="home-page">
           
                <section className="hero-image" >
                    <div className="hero-text">
                        <h1 >We are Farm for you</h1>
                        <h3>Brings the farm to you</h3>
                    </div>
                </section>
                

                <section className="categories-container flex space-between"> 
                    {categories&&categories.map((cat,idx)=>{
                        return <Link  key={idx} to={`/items?q=${cat.name}`}> <div className="categorie-img flex column">
                            <img src={`${cat.img}`} alt=""/>
                            <h3>{`${cat.name}`}</h3>
                        </div></Link>
                    })}
                </section>
{/* 
                {items && <Caruselle toShow={4} classN={'items-carusel'} items={items} header={'Shop by category:'} />}
                {items && <Caruselle toShow={4} classN={'items-carusel'} items={items} header={'Hot items'} />}
                {items && <Caruselle toShow={3}  classN={'items-carusel'} items={items} header={'Sale items'} />} */}

                {/* <div className="news">
                {items && <Caruselle toShow={1} classN={'news'}  items={items} header={'News'} />}
                </div>
 */}

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
