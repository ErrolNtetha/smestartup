import { Button } from 'components/button';
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
          <p> The ID of this post is {id} </p>

          <Button className='feed__modal--delete' onClick={() => console.log('delete clicked')}> Delete </Button>

          <section className='feed__modalClose'>
            <FiX onClick={handleToggle} />
          </section>
        </section>
    </div>
  );
};