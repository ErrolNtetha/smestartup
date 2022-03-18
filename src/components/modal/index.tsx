import React from 'react';
import { FiX } from 'react-icons/fi';

interface Props {
  handleToggle: boolean,
  id: string
}

export const Modal:React.FC<Props> = ({ handleToggle, id }) => {
  return (
    <div className='feed__modalContainer'>
        <section className='feed__modal'>
           The id of this post is {id}

          <section className='feed__modalClose'>
            <FiX onClick={handleToggle} />
          </section>
        </section>
    </div>
  );
};