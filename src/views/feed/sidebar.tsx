import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from 'components/avatar';
import { Button } from 'components/button';

export const Sidebar = () => {
    const history = useHistory();

  return (
      <div className='feed__sidebar'>
          <div className='feed__profileCover'> </div>
          <section className='feed__profileWrapper'>
              <span className='feed__cardNames'>
                <Avatar className='feed__profileAvatar' />
                Mphumeleli Ntetha
              </span>
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
