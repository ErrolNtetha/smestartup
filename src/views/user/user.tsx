import React from 'react';
import { FiMapPin, FiSettings, FiClock } from 'react-icons/fi';
import { useFetchUserId } from 'hoc/useFetchUserId';
import { Link } from 'react-router-dom';
import { Avatar } from 'components/avatar';
import cover from 'assets/bg/cover.png';
import { format } from 'date-fns';
// {format(new Date(createdAt), 'd MMMM u') }
import { MdVerified } from 'react-icons/md';
// import { useStore } from 'hoc/useStore';
import Skeleton from 'react-loading-skeleton';

export interface IProps {
    user: {
        name: {
            firstName: string;
            lastName: string;
        }
        occupation: string;
        avatar: string;
        id: string;
        bio: string;
        isVerified: boolean;
        location: string;
        createdAt: Date | string;
    }
}

export const User = ({ user }: IProps) => {
    const { authorId } = useFetchUserId();
    return (
        <>
            <section className='user__coverImage'>
                <img src={cover} alt='' className='user__cover' />
            </section>
            <section className='user__details'>
                <span className='user__personalDetails'>
                    <span className='user__personalDetails'>
                        <Avatar className='user__avatar' avatar={user?.avatar} />
                        <span className='user__namesGroup'>
                            <h3 className='user__names'> {user?.name?.firstName} {user?.name?.lastName} {user?.isVerified && <MdVerified className='user__verifiedIcon' />} </h3>
                            <p className='user__occupation'> {user?.occupation || <Skeleton />} </p>
                        </span>
                    </span>
                    {authorId === user?.id
                        && <Link to='/profile/edit' className='user__editProfile'> <FiSettings /> <span>Edit Profile</span> </Link> }
                </span>
                <span>
                    <p className='user__bio'> {user?.bio || <Skeleton count={3} />}</p>
                    <p className='user__joined'> <FiMapPin /> {user?.location} </p>
                    <p className='user__joined'> <FiClock /> Joined {format(new Date(user?.createdAt), 'd MMMM yyy')} </p>
                </span>
            </section>
        </>
    );
};
