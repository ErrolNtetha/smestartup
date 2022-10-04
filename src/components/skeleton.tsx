/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface IProps {
    cards: number;
}

export const SkeletonPosts = ({ cards }: IProps) => {
    return Array(cards).fill(0).map((_, index) => (
        <span className='skeletonWrapper' style={{ marginBottom: '1em' }} key={index}>
            <span className='skeletonHeader'>
                <span className='sleftColumn'>
                    <Skeleton circle width={50} height={50} />
                </span>
                <span className='srightColumn'>
                    <span className='sname'>
                        <Skeleton />
                    </span>
                    <span className='stitle'>
                        <Skeleton />
                    </span>
                </span>
            </span>
            <span className='spost'>
                <Skeleton count={4} />
            </span>
        </span>
    ));
};
