

import React from 'react';
import itemService from '../services/itemService'
import { Link } from "react-router-dom";

export class CategoryBar extends React.Component {

    render() {
        return (
            <section className={`category-bar flex space-between`}>
                <Link to={`/items?q=vegetables`}>
                    <div className="categorie-img flex column">
                        vegetables
                    </div>
                </Link>
                <Link  to={`/items?q=fruits`}>
                    <div className="categorie-img flex column">
                        fruits
                    </div>
                </Link>
                <Link  to={`/items?q=meat`}>
                    <div className="categorie-img flex column">
                        meat
                    </div>
                </Link>
                <Link  to={`/items?q=dairy`}>
                    <div className="categorie-img flex column">
                        dairy
                    </div>
                </Link>
                <Link  to={`/items?q=organic`}>
                    <div className="categorie-img flex column">
                        organic
                    </div>
                </Link>
                <Link to={`/items?q=flowers`}>
                    <div className="categorie-img flex column">
                        flowers
                    </div>
                </Link>
            </section>


        );
    }

}

