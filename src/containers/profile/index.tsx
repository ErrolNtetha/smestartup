import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'views/header';
import avatar1 from 'assets/avatar.png';

export const Profile = () => {
  const [avatar, setAvatar] = useState('');
  console.log(avatar1);

  useEffect(() => {
    async function fetchUser() {
      await axios.get('/profile', {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      })
        .then((res) => {
            console.log(res.data);
            setAvatar(res.data.avatar);
        })
        .catch((err) => console.log(err));
    }

    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <section>
        <img src={avatar} alt='my avatar' />
      </section>
    </>
  );
};