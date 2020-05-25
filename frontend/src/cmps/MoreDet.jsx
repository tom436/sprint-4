import React from 'react';
import MapContainer from '../cmps/MapContainer'

function RevPrev(review) {
    return (
        <div className="shop-rev flex column " key={review.user}>
            <p>{review.stars}</p>
            <p className="rev-user">By: {review.user}</p>
            <p className="rev-txt">{review.txt}</p>
        </div>
    )
}

export default function MoreDet(props) {


    const { shop } = props
    const { isMore } = props
    console.log(isMore);

    return (
        <section >

            <p className="shop-tags">We are selling: {shop.tags}</p>
            <p className="shop-location">We are located at: {shop.location}</p>
            <div className="reviews flex column">
                <span className="rev-span">Reviews:</span>
                <div>
                    {shop.reviews.map(rev => RevPrev(rev))}
                </div>

            </div>           }


            {/* <div className="shop-map">
                    <MapContainer />
                </div> */}
            {/* <img src={props.shop.logo} /> */}

        </section>
    )
}