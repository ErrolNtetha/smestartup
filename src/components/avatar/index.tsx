import React, { useState, useEffect } from 'react';
import { NODE_ENV } from 'config/baseURL';
import defaultAvatar from 'assets/blendot.png';
import axios from 'axios';

type Props = {
    className: string
}

export const Avatar = ({ className }: Props) => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    async function fetchUser() {
      await axios.get(`${NODE_ENV()}/profile`, {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      })
        .then((res) => {
            setAvatar(res.data.avatar);
        })
            .catch((err) => console.log('There was an error fetching avatar. ', err));
    }
    fetchUser();
  }, []);

    return (
        <section>
            {!avatar ? <img src={defaultAvatar} alt='just a random pic' className={className} /> : 'there is a picure'}
        </section>
    );
};
