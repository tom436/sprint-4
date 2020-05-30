import React from 'react';
import MapContainer from './MapContainer'
import AddReview from './AddReview'
import { Link } from 'react-router-dom';

function RevPrev(review, idx) {
    return (
        <div key={idx} className="shop-rev flex space-around">
            <div className="user-rev column">
                <p className="rev-user">Name: {review.user}</p>
                <p>{review.time}</p>
                <p>{review.stars}</p>
            </div>
            <div className="user-rev">
                <h2 className="rev-txt"> {review.txt}</h2>
            </div>
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

    const { shop, addReview, isAddReview, getAddReview } = props

    return (
        <section className="rev-box">
            <button className="add-review-btn" onClick={getAddReview}>Add Review</button>
            {isAddReview && <AddReview addReview={addReview} />}

            <div className="reviews flex column justify-center">
                <span className="rev-span">Reviews:</span>
                <div className="rev-box">
                    {shop.reviews.map((rev, idx) => RevPrev(rev, idx))}
                </div>

            </div>

        </section>
    )
}