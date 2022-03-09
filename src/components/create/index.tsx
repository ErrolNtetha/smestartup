import { Button } from 'components/button';
import React from 'react';
// import { RootState } from 'store';
import { FiEdit3 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line camelcase
import toggleField_ON from 'store/actions/toggleField_ON';

export const Create = () => {
// when this button is clicked, change the
// the state to true and open the 'post' component
const dispatch = useDispatch();

const handleClick = () => {
  dispatch(toggleField_ON());
};

  return (
    <div className='feed__create'>
      <Button className='feed__create__post' onClick={handleClick}> Create Post <FiEdit3 /> </Button>
    </div>
  );
};