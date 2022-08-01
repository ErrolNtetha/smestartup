import React from 'react';
// import businessDeal from '../../assets/svg/businessDeal.svg';
// import businessListing from '../../assets/svg/businessListing.svg';
// import collaborate from '../../assets/svg/collaborate.svg';

export const Features = () => {
  return (
    <section className='features'>
      <h2 className='features__header'> Main Features </h2>
        <section className='features__inner'>
          <span className='features__item'>
              {/* <img src={collaborate} className='features__svg' alt='business deal svg' /> */}
            <h2 className='features__header'> Collaborate </h2>
            <p className='features__description'> What if you have almost everything to start a business but fall short of one major asset like land & building? How about collaborating with other entrepreneurs and find those who have what you do not have? With our founder match-maker, you will find people who have that missing puzzle of your business idea. </p>
          </span>
          <span className='features__item'>
              {/* <img src={businessDeal} className='features__svg' alt='business deal svg' /> */}
            <h2 className='features__header'> Find Suppliers </h2>
            <p className='features__description'> Finding suppliers for your company has never been easier with our search directory. Our search tool lets you search suppliers by location so you can always get the ones that are closest to you. </p>
          </span>
          <span className='features__item'>
              {/* <img src={businessListing} className='features__svg' alt='svg' /> */}
            <h2 className='features__header'> Newsfeed </h2>
            <p className='features__description'> Got some tips that you might want to share? Share with the community what is happening and what you are up to. Exchange thoughts and ideas with the like-minded entrepreneurs like you. </p>
          </span>
        </section>
    </section>
  );
};
