import React, { FC } from 'react';
import { FiStar, FiMoreHorizontal } from 'react-icons/fi';
import cat from 'assets/cat.jpg';
import { Button } from 'components/button';

export const List:FC = () => {
  return (
    <section className='feed__list'>
      <span className='feed__firstRow'>
        <div className='feed__profile'>
          <img src={cat} alt="me" className='feed__profileImage' />
          <span>
            <h3 className='feed__name'> Mphumeleli Ntetha </h3>
            <p className='feed__title'> Founder and CEO, Blendot </p>
            <p className='feed__recent'> 32 mins ago </p>
          </span>
        </div>
        <FiMoreHorizontal className='feed__options' />
      </span>

      <p className='feed__listContent'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptate eaque quam.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, quos doloribus atque laboriosam dignissimos rerum facere.
      </p>
      <hr style={{ opacity: '0.1' }} />
      <section className='feed__LastRow'>
        <span className='feed__stats'>
          <span className='feed__comments'>  </span>
          <Button className='feed__stats__bookmarks'> <FiStar className='feed__starIcon' /> 329 </Button>
        </span>
      </section>
    </section>
  );
};