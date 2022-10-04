/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skeleton from 'react-loading-skeleton';

interface IProps {
    cards: number;
    numCount?: number;
}

export const SkeletonLoading = ({ cards, numCount }: IProps): React.FunctionComponentElement => {
    return Array(cards).fill(0).map((_, index) => (
        <section key={index} className='supplier__skeletonCard'>
            <span className='supplier__titleSkeleton'>
                <Skeleton style={{ width: '50%' }} />
                <Skeleton style={{ width: '30%' }} />
            </span>
            <span className='supplier__bodySkeleton'>
                <Skeleton count={numCount} />
            </span>
        </section>
    ));
};
