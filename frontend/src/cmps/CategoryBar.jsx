

import React from 'react';
import itemService from '../services/itemService'
import { Link } from "react-router-dom";
import cheese from '../imgs/svgs/cheese.svg'
import apple from '../imgs/svgs/apple.svg'
import flower from '../imgs/svgs/flower.svg'
import leaf from '../imgs/svgs/leaf.svg'
import meat from '../imgs/svgs/meat.svg'
import carrot from '../imgs/svgs/carrot.svg'

export class CategoryBar extends React.Component {

    render() {
        return (
            <section className={`category-bar flex space-between`}>
                <Link to={`/items?q=vegetables`}>
                    <div className="categorie-img flex column">
                    <img  src={carrot} alt=""/>
  
                        vegetables
                    </div>
                </Link>
                <Link  to={`/items?q=fruits`}>
                    <div className="categorie-img flex column">
                    <img  src={apple} alt=""/>

                        fruits
                    </div>
                </Link>
                <Link  to={`/items?q=meat`}>
                    <div className="categorie-img flex column">
                    <img  src={meat} alt=""/>

                        meat
                    </div>
                </Link>
                <Link  to={`/items?q=dairy`}>
                    <div className="categorie-img flex column">
                        <img  src={cheese} alt=""/>
                        dairy
                    </div>
                </Link>
                <Link  to={`/items?q=organic`}>
                    <div className="categorie-img flex column">
                    <img  src={leaf} alt=""/>

                        organic
                    </div>
                </Link>
                <Link to={`/items?q=flowers`}>
                    <div className="categorie-img flex column">
                    <img  src={flower} alt=""/>

                        flowers
                    </div>
                </Link>
            </section>


        );
    }

}

