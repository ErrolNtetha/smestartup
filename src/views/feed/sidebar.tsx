import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from 'components/avatar';
import { Button } from 'components/button';
import { useSelector } from 'react-redux';

export const Sidebar = () => {
    const history = useHistory();
    const { avatar, occupation, name } = useSelector((state) => state.userProfile.userData);

  return (
      <div className='feed__sidebar'>
          <div className='feed__profileCover'> </div>
          <section className='feed__profileWrapper'>
              <span className='feed__cardNames'>
                <Avatar avatar={avatar} className='feed__profileAvatar' />
                {name.firstName} {name.lastName}
              </span>
            {occupation}
            <hr style={{ opacity: '0.2' }} />
            <section className='feed__bio'>
                This is the bio
            </section>
            <section className='feed__toProfile'>
                <Button onClick={() => history.push('/profile')} className='feed__fullProfile'> My Profile </Button>
            </section>
          </section>
      </div>
  );
};
