
import React from 'react';

export function Stars(props) {
    var i = 0;
    var stars =['','','','',''];
     return stars.map((star, idx) => {
        if (idx < props.count) return <span key={idx} className="fas fa-star star"></span>
        else return <span key={idx} className="far fa-star star"></span>
    })
}

