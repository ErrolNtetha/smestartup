import React, { FC } from 'react';
import { FiStar, FiMoreHorizontal } from 'react-icons/fi';
import avatar from 'assets/avatar.png';
import { Button } from 'components/button';
import { Modal } from 'components/modal';
import { formatDistance } from 'date-fns';

interface Props {
  name: {
    firstName: string;
  };
  post: string;
  id: string;
  date: Date;
}

export const List:FC<Props> = ({
 name, post, id, date
}) => {
  const [modal, setModal] = React.useState(false);

  const handleToggle = () => {
    setModal(!modal);
  };

  return (
    <section className='feed__list'>
      <span className='feed__firstRow'>
        <div className='feed__profile'>
          <img src={avatar} alt='me' className='feed__profileImage' />
          <span>
            <h4 className='feed__name'> {name.user} </h4>
            <p className='feed__title'> Works at Company X </p>
            <p className='feed__recent'> {formatDistance(new Date(date), new Date(), { addSuffix: true })} </p>
          </span>
        </div>
        {modal && <Modal handleToggle={handleToggle} id={id} />}
        <FiMoreHorizontal className='feed__options' onClick={() => setModal(!modal)} />
      </span>

      <p className='feed__listContent'> {post.post} </p>
      <hr style={{ opacity: '0.1' }} />

      <section className='feed__LastRow'>
        <span className='feed__stats'>
          <span className='feed__comments'>  </span>
          <Button className='feed__stats__bookmarks'> <FiStar className='feed__starIcon' /> 1 </Button>
        </span>
      </section>
    </section>
  );
};