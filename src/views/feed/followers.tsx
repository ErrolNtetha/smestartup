import React from 'react';
import { Button } from 'components/button';

export const Followers = () => {
  return (
      <div className='feed__followers'>
          <section style={{ textAlign: 'center' }}> People to Follow </section>
            <hr style={{ opacity: '.4' }} />
            <section className='feed__followWrapper'>
                <span className='feed__followGroup'>
                    <span>
                        <p> Syanda Dlamini </p>
                        <p className='feed__followerTitle'> Dispatch, Ackermans </p>
                    </span>
                    <Button className='feed__followBtn'> Follow </Button>
                </span>
            </section>
      </div>
  );
};
