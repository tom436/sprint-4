import React from 'react';
import MapContainer from './MapContainer'
import AddReview from './AddReview'
import { Link } from 'react-router-dom';
import {Stars} from './Stars'

function RevPrev(review, idx) {
    return (
        <div key={idx} className="shop-rev flex align-center">
            <div className="column rev-det">
                <h3 >{review.user}</h3>
                <p>{review.time}</p>
                <div className="stars">
                <Stars count={review.stars}/>
                </div>
            </div>
            <p className="rev-txt">{review.txt}</p>
        </div>
    )
}

function space(tags) {
   return tags.map(tag => {
        return <span>
            <Link to={`/items?q=${tag}`}> {`${tag}  `} </Link>
        </span>
    })
}

export default function Reviews(props) {

    const { shop, addReview } = props

    return (
        <section >

            {/* <AddReview addReview={addReview} /> */}
            {/* <div className="det-shop flex column">
                <p className="shop-tags">We are selling:  {space(shop.tags)} </p>
                <p className="shop-location">We are located at: {shop.location}</p>

            </div> */}
            <h3 className="reviews">Reviews:</h3>
                <div className="rev-box flex column">
                    {shop.reviews.map((rev, idx) => RevPrev(rev, idx))}
                </div>


            {/* <div className="shop-map">
                    <MapContainer />
                </div> */}
            {/* <img src={props.shop.logo} /> */}

        </section>
    )
}