

import React from 'react';

import itemService from '../services/itemService'

import Caruselle from '../cmps/Caruselle'
export default class Carusel extends React.Component {

    state = {
        items:''
    }
    componentDidMount() {
           
        itemService.query().then(items => {

            console.log(items)
            this.setState({ items })
        })
    }


    render() {
        const { items } = this.state
        return (
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



