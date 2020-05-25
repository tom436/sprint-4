
import React from 'react';
import itemService from '../services/itemService'
import { Link } from "react-router-dom";

export class CategoryBar extends React.Component {

    state = {
        categories: ''
    }

    componentDidMount() {
        itemService.queryCategories().then(categories => {
            this.setState({ categories })

        })

    }
    render() {
        const { categories } = this.state
        return (

            <section className={`categories-container flex space-between`}>
                {categories && categories.map((cat, idx) => {
                    return <Link key={idx} to={`/items?q=${cat.name}`}> <div className="categorie-img flex column">
                        <img src={`${cat.img}`} alt="" />
                        <h4>{`${cat.name}`}</h4>
                    </div></Link>
                })}
            </section>


        );
    }

}
