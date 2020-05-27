import { Link } from "react-router-dom";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  ItemPreview  from '../cmps/ItemPreview.jsx'


export default function Caruselle(props) {
    const { items , toShow,classN } = props;

    const settings = {
        infinite: true,
        slidesToShow: toShow,
        slidesToScroll: 1,
        speed: 500,
    }

    return (
        <div className={classN}>
            {<Slider {...settings}>
                 {items.map((item, idx) => {
                    return <div key={idx} className="carusel-img">
                        <ItemPreview item={item}/>
                    </div>
                })}
            </Slider>}
        </div>
    );
}

