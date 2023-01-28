import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const CardSkeleton = () => {
    return (
        <section className='supplier__skeletonCardContainer'>
            <span className='supplier__avatarSkeletonLeft'>
                <Skeleton circle width={40} height={40} />
            </span>
            <span className='supplier__textSkeletonRight'>
                <Skeleton />
                <Skeleton className='supplier__status' />
            </span>
        </section>
    );
};
