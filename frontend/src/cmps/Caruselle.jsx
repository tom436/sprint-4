import { Link } from "react-router-dom";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemPreview from '../cmps/ItemPreview.jsx'


export default function Caruselle(props) {
  const { items } = props;

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      {items.map((item, idx) => {
        return <ItemPreview key={idx} showDetails={() => { }} item={item} />
      })}
    </Slider>
  )
}

