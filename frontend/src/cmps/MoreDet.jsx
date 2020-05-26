import React from 'react';
import MapContainer from '../cmps/MapContainer'
import AddReview from './AddReview'

function RevPrev(review, idx) {
    return (
        <div key={idx} className="shop-rev flex space-around">
            <div className="column">
            <p className="rev-user">{review.user}</p>
            <p>{review.time}</p>
            <p>{review.stars}</p>
            </div>


            <p className="rev-txt">{review.txt}</p>
        </div>
    )
}

export default function MoreDet(props) {

    const { shop, addReview } = props

    return (
        <section >

            <AddReview addReview={addReview} />

            <p className="shop-tags">We are selling: {shop.tags}</p>
            <p className="shop-location">We are located at: {shop.location}</p>
            <div className="reviews flex column justify-center">
                <span className="rev-span">Reviews:</span>
                <div className="rev-box">
                    {shop.reviews.map((rev, idx) => RevPrev(rev, idx))}
                </div>

            </div>

            {/* <div className="shop-map">
                    <MapContainer />
                </div> */}
            {/* <img src={props.shop.logo} /> */}

        </section>
    )
}