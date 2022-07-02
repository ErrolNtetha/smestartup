import React from 'react';
import { FiClock, FiMapPin, FiSettings } from 'react-icons/fi';
import { useFetchUserId } from 'hoc/useFetchUserId';
import { Link } from 'react-router-dom';
import { Avatar } from 'components/avatar';
import { useSelector } from 'react-redux';
// import { getDateInMonth } from 'helpers/formatDistance';
import { format } from 'date-fns';

export const Intro = () => {
    const userId = useFetchUserId();
    const { userData } = useSelector((userState) => userState.userProfile);
    const {
        name,
        occupation,
        avatar,
        _id,
        createdAt
    } = userData;

    return (
        <>
            <section className='profile__coverImage' />
            <section className='profile__details'>
                <span className='profile__personalDetails'>
                    <span className='profile__personalDetails'>
                        <Avatar className='profile__avatar' avatar={avatar} />
                        <span className='profile__namesGroup'>
                            <h3 className='profile__names'> {name.firstName} {name.lastName} </h3>
                            <p className='profile__occupation'> {occupation} </p>
                        </span>
                    </span>
                    {userId === _id
                        ? <Link to={`/profile/${userId}`} className='profile__editProfile'> <FiSettings />  </Link>
                    : null}
                </span>
                <span>
                    <p className='profile__bio'> This is the bio. Just a dummy text to represent a bio of the account and visualize how it will look like. </p>
                    {console.log(createdAt)}
                    <p className='profile__joined'> <FiClock /> Joined {format(new Date(createdAt), 'd MMMM yyy')} </p>
                    <p className='profile__joined'> <FiMapPin /> Durban, South Africa </p>
                </span>
            </section>
        </>
    );
};
