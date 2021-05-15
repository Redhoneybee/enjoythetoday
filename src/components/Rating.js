import React from "react";
import StarRatings from "react-star-ratings";

const Rating = ({ rating }) => {
    return (
        <StarRatings
            rating={rating}
            starRatedColor="#f21170"
            starDimension="28px"
            starSpacing="1px"
        />
    )
}

export default Rating;