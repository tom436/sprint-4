

import React from 'react';
import itemService from '../services/itemService'
import { Link } from "react-router-dom";

export class CategoryBar extends React.Component {

    state = {
        categories: [    {
            "name": "veg",
            "img": "https://image.flaticon.com/icons/svg/2916/2916169.svg"
        },
        {
            "name": "meat",
            "img": "https://image.flaticon.com/icons/svg/2916/2916184.svg"
        },
        {
            "name": "dairy ",
            "img": "https://image.flaticon.com/icons/svg/604/604813.svg"
        },
        {
            "name": "organic",
            "img": "https://image.flaticon.com/icons/svg/497/497393.svg"
        },
        {
            "name": "flowers",
            "img": "https://image.flaticon.com/icons/svg/2972/2972053.svg"
        }]
    }

    componentDidMount() {


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

