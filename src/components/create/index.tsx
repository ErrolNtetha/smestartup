import { Button } from 'components/button';
import React from 'react';
import { FiEdit3 } from 'react-icons/fi';

interface Props {
    toggleField: Function;
}

export const Create = ({ toggleField }: Props) => {
  return (
    <div className='feed__create'>
      <Button className='feed__create__post' onClick={toggleField}> New Post <FiEdit3 /> </Button>
    </div>
  );
};
