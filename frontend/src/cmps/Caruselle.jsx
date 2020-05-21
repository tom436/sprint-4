import { Link } from "react-router-dom";
import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Caruselle(props) {
    const { items, header, toShow,classN } = props;


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: toShow,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 10000,
        pauseOnHover: true,

    }


    return (
        <div className={classN}>
            <h1>{header}</h1>
            {<Slider {...settings}>
                {items.map((item, idx) => {

                    return <div key={idx} className="ggg">
                        <Link to={`item/${item._id}`}>
                        <img src={`${item.img}`} alt='cannot load' />
                <p>${item.price}/{item.units}</p>
                        </Link>
                    </div>
                })}
            </Slider>}
        </div>
    );
}
