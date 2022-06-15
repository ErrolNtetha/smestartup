import React, { useState, useEffect } from 'react';
import { Intro } from 'components/profile/intro';
import { Body } from 'components/profile/body';
// import { NODE_ENV } from 'config/baseURL';
import axios from 'axios';

export const Head = () => {
  const [userAvatar, setAvatar] = useState('');
  const [fullNames, setFullNames] = useState('');
  const [profileId, setProfileId] = useState('');
  const [date, setDate] = useState(Date);

  useEffect(() => {
    async function fetchUser() {
        await axios.get('http://localhost:5000/profile', {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('accessToken')
        }
      })
        .then((res) => {
            const {
                name,
                avatar,
                _id,
                createdAt
            } = res.data;
            setFullNames(name);
            setAvatar(avatar);
            setProfileId(_id);
            setDate(createdAt);
        })
        .catch((err) => console.error(err));
    }

    fetchUser();
  }, []);

    return (
        <section className='profile__header'>
            <Intro name={fullNames} avatar={userAvatar} profileId={profileId} date={date} occupation='Software Engineer' />
            <Body fullName='Mp' fullNames={fullNames} />
        </section>
    );
};
