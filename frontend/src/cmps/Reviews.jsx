import React from 'react';
import MapContainer from './MapContainer'
import AddReview from './AddReview'
import { Link } from 'react-router-dom';
import { Stars } from './Stars'

function RevPrev(review, idx) {
    return (
        <div key={idx} className="shop-rev flex align-center">
            <div className="column rev-det">
                <h3 >{review.user}</h3>
                <p>{review.time}</p>
                <div className="stars">
                    <Stars count={review.stars} />
                </div>
            </div>
            <div className="user-rev">
                <p className="rev-txt"> {review.txt}</p>
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

            <h3 className="reviews">Reviews:</h3>
            <div className="rev-box flex column">
                {shop.reviews.map((rev, idx) => RevPrev(rev, idx))}
            </div>


        </section>
    )
}