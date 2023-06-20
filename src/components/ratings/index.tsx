import React from 'react';
import ReactStars from 'react-rating-stars-component';

export const Rating = () => {
    return (
        <div>
            <ReactStars
              count={5}
              size={15}
            />
        </div>
    );
};
