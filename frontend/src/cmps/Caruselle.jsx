import { Link } from "react-router-dom";
import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Caruselle(props) {
    const { items, header, toShow,classN } = props;


    const settings = {
        infinite: true,
        slidesToShow: toShow,
        slidesToScroll: 1,
        speed: 500,

    }


    return (
        <div className={classN}>
            <h1>{header}</h1>
            {<Slider {...settings}>
                {items.map((item, idx) => {

                    return <div key={idx} className="carusel-img">
                        <Link to={`item/${item._id}`}>
                        <img src={`${item.img}`} alt='cannot load' />
                        </Link>
                    </div>
                })}
            </Slider>}
        </div>
    );
}
