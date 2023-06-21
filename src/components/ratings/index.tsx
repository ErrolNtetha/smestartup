import React from 'react';
import ReactStars from 'react-rating-stars-component';

interface Props {
    onRateChange: React.ChangeEventHandler;
}

export const Rating = ({ onRateChange }: Props) => {
    return (
        <ReactStars
          count={5}
          size={15}
          onChange={onRateChange}
        />
    );
};
