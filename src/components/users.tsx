import React from 'react';
import { MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Avatar } from './avatar';

 interface Props {
    name: {
         firstName: string;
         lastName: string;
    };
    occupation: string;
    avatar: string;
    userId: string;
    verified: boolean;
 }

 export const Users = ({
    name,
    occupation,
    avatar,
    userId,
    verified
 }: Props) => {
     return (
        <>
        <Link target='_self' to={`/p/user/${userId}`} className='header__searchResult'>
             <Avatar avatar={avatar} className='header__userAvatarResult' />
             <span className='header__groupDetails'>
                 <p className='header__userFullNames'> {name.firstName} {name.lastName} {verified && <MdVerified className='header__isVerified' />} </p> <p className='header__userOccupation'> {occupation} </p>
             </span>
        </Link>
        <hr className='header__resultDivider' />
        </>
     );
};
