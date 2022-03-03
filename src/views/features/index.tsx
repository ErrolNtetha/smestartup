import React from 'react';
import businessDeal from '../../assets/svg/businessDeal.svg';
import businessListing from '../../assets/svg/businessListing.svg';
import collaborate from '../../assets/svg/collaborate.svg';

export const Features = () => {
  return (
    <section className='features'>
      <h2 className='features__header'> Main Features </h2>
        <section className='features__inner'>
          <span className='features__item'>
            <img src={collaborate} className='features__svg' alt='business deal svg' />
            <h2 className='features__header'> Collaborate </h2>
            <p className='features__description'> This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel atque asperiores velit numquam. Lorem ipsum dolor sit amet consectetur. </p>
          </span>
          <span className='features__item'>
            <img src={businessDeal} className='features__svg' alt='business deal svg' />
            <h2 className='features__header'> Business Deal </h2>
            <p className='features__description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, error odit eaque sunt ut asperiores? Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing. </p>
          </span>
          <span className='features__item'>
            <img src={businessListing} className='features__svg' alt='svg' />
            <h2 className='features__header'> Business Listing </h2>
            <p className='features__description'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sapiente sed eum provident aperiam? Incidunt. </p>
          </span>
        </section>
    </section>
  );
};