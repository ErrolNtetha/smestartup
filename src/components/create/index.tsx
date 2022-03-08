import { Button } from 'components/button';
import React from 'react';
import { FiEdit3 } from 'react-icons/fi';

export const Create = () => {
  return (
    <div className='feed__create'>
      <Button className='feed__create__post'> Create Post <FiEdit3 /> </Button>
    </div>
  );
};