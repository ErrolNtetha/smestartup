import React from 'react';
import { FiMapPin, FiSettings, FiClock } from 'react-icons/fi';
import { useFetchUserId } from 'hoc/useFetchUserId';
import { Link } from 'react-router-dom';
import { Avatar } from 'components/avatar';
import cover from 'assets/bg/cover.png';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { MdVerified } from 'react-icons/md';

export const Intro = () => {
    const { authorId } = useFetchUserId();
    const { userData } = useSelector((userState) => userState.userProfile);
    const {
        name,
        occupation,
        avatar,
        _id,
        isVerified,
        bio
    } = userData;

    return (
        <>
            <section className='profile__coverImage'>
                <img src={cover} alt='' className='profile__cover' />
            </section>
            <section className='profile__details'>
                <span className='profile__personalDetails'>
                    <span className='profile__personalDetails'>
                        <Avatar className='profile__avatar' avatar={avatar} />
                        <span className='profile__namesGroup'>
                            <h3 className='profile__names'> {name.firstName} {name.lastName} {isVerified && <MdVerified className='profile__verifiedIcon' />} </h3>
                            <p className='profile__occupation'> {occupation} </p>
                        </span>
                    </span>
                    {authorId === _id
                        && <Link to='/profile/edit' className='profile__editProfile'> <FiSettings /> <span>Edit Profile</span> </Link> }
                </span>
                <span>
                    <p className='profile__bio'> {bio}</p>
                    <p className='profile__joined'> <FiMapPin /> Durban, South Africa </p>
                    <p className='profile__joined'> <FiClock /> Joined {format(new Date(userData.createdAt), 'd MMMM u')} </p>
                </span>
            </section>
        </>
    );
};
