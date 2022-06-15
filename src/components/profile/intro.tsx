import React from 'react';
import defaultAvatar from 'assets/avatar.png';
import { FiMapPin, FiSettings } from 'react-icons/fi';
import { useFetchUserId } from 'hoc/useFetchUserId';
import { Link } from 'react-router-dom';
// import { getDateInMonth } from 'helpers/formatDistance';

interface Props {
    name: {
        firstName: string;
        lastName: string;
    };
    avatar: string;
    occupation: string;
    profileId: string;
    date: string;
}

export const Intro = ({
    name, avatar, occupation, profileId, date
}: Props) => {
    const isTrue = !avatar ? defaultAvatar : 'there is an image';
    const userId = useFetchUserId();
    console.log(date);

    return (
        <>
            <section className='profile__coverImage' />
            <section className='profile__details'>
                <span className='profile__personalDetails'>
                    <span className='profile__personalDetails'>
                        <img src={isTrue} alt='this is me' className='profile__avatar' />
                        <span className='profile__namesGroup'>
                            <h2 className='profile__names'> {name.firstName} {name.lastName} </h2>
                            <p className='profile__occupation'> {occupation} </p>
                        </span>
                    </span>
                    {userId === profileId
                        ? <Link to={`/profile/${userId}`} className='profile__editProfile'> <FiSettings />  </Link>
                    : 'other button'}
                </span>
                <span>
                    <p className='profile__bio'> This is the bio. Just a dummy text to represent a bio of the account and visualize how it will look like. </p>
                    <p className='profile__joined'> <FiMapPin /> Durban, South Africa </p>
                </span>
            </section>
        </>
    );
};