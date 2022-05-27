import React from 'react';
import defaultAvatar from 'assets/avatar.png';

interface Props {
    name: {
        firstName: string;
        lastName: string;
    };
    avatar: string;
    occupation: string;
}

export const Intro = ({ name, avatar, occupation }: Props) => {
    const isTrue = !avatar ? defaultAvatar : 'there is an image';
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
                    <span> Edit </span>
                </span>
                <span>
                    <p className='profile__bio'> This is the bio. Just a dummy text to represent a bio of the account and visualize how it will look like. </p>
                    <p className='profile__joined'> Joined 26 May 2022 </p>
                </span>
            </section>
        </>
    );
};
