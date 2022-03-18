import React, { FC } from 'react';
import { FiStar, FiMoreHorizontal } from 'react-icons/fi';
import avatar from 'assets/avatar.png';
import { Button } from 'components/button';
import { Modal } from 'components/modal';

interface Props {
  name: {
    firstName: string;
  };
  post: string;
}

export const List:FC<Props> = ({ name, post }) => {
  const [modal, setModal] = React.useState(false);

  const handleToggle = (): boolean => {
    setModal(!modal);
  };

  return (
    <section className='feed__list'>
      <span className='feed__firstRow'>
        <div className='feed__profile'>
          <img src={avatar} alt="me" className='feed__profileImage' />
          <span>
            <h4 className='feed__name'> {name.user} </h4>
            <p className='feed__title'> Founder and CEO, Blendot </p>
            <p className='feed__recent'> 32 mins ago </p>
            {modal && <Modal handleToggle={handleToggle} />}
          </span>
        </div>
        <FiMoreHorizontal className='feed__options' onClick={() => setModal(!modal)} />
      </span>

      <p className='feed__listContent'> {post.post} </p>
      <hr style={{ opacity: '0.1' }} />

      <section className='feed__LastRow'>
        <span className='feed__stats'>
          <span className='feed__comments'>  </span>
          <Button className='feed__stats__bookmarks'> <FiStar className='feed__starIcon' /> 19 </Button>
        </span>
      </section>
    </section>
  );
};