/* eslint-disable operator-linebreak */
import React, { FC } from 'react';
import { FiStar, FiMoreHorizontal } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import avatar from 'assets/avatar.png';
import { Button } from 'components/button';
import { Modal } from 'components/modal';
import { formatDistance } from 'date-fns';
import { useFetchUserId } from 'hoc/useFetchUserId';
import { axiosPrivate } from 'config/axiosInstance';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import { NODE_ENV } from 'config/baseURL';

export interface Props {
  name: {
    firstName: string;
  };
  post: string;
  id: string;
  date: Date;
  image: string;
  author: string,
  isVerified: boolean;
    title: {
        occupation: string;
    };
}

export const List:FC<Props> = ({
 name, post, id, date, image, isVerified, title, author
}) => {
  const [modal, setModal] = React.useState(false);
    const [likes, setLikes] = React.useState(0);
    // const [response, setResponse] = useState('');
    const socket = io(`${NODE_ENV()}`); const userId = useFetchUserId();

    const handleLikes = (postId: string) => {
        console.log('clicked');
        setLikes((prevNum) => prevNum + 1);

        const formData = {
            likes,
        };

        axiosPrivate.put(`/feed/${postId}`, formData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    const handleDelete = async (postId: string) => {
        await axiosPrivate.delete(`feed/${postId}`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    React.useEffect(() => {
            socket.on('connection', (socketid) => {
            console.log('Front-end successfully connected. ', socketid);
        });

        socket.emit('post', (sockID: string) => {
            console.log('The ID is: ', sockID);
        });
    }, []);

return (
    <section className='feed__list'>
      <span className='feed__firstRow'>
        <div className='feed__profile'>
          <img src={avatar} alt='me' className='feed__profileImage' />
          <span>
            <h4 className='feed__name'> {name.user} <MdVerified /> {isVerified.isVerified && <MdVerified /> } </h4>
            <p className='feed__title'> Founder & CEO, Blendot </p>
            <p className='feed__title'> {title?.occupation} </p>
            <p className='feed__recent'> {formatDistance(new Date(date.createdAt), new Date(), { addSuffix: true })} </p>
          </span>
        </div>
        {modal &&
            (
                <Modal>
                    <section className='feed__options'>
                        {userId === author.author
                            ? 'Edit post'
                            : 'This aint your post'}
                    </section>
                    <section className='feed__btnContainer'>
                        {userId === author.author && <Button className='feed__modal--delete' onClick={() => handleDelete(id._id)}> Delete </Button>}
                    </section>
                </Modal>
            )}
        <FiMoreHorizontal className='feed__options' onClick={() => setModal(!modal)} />
      </span>

      <Link to={`/feed/p/${id._id}`} className='feed__listContent'> {post.post} </Link>
    {!image.encodedImage ? null
    :
    (
        <section>
          <img src={image.encodedImage} alt='jfds' className='feed__postImage' />
        </section>
    )}
      <hr style={{ opacity: '0.1' }} />

      <section className='feed__LastRow'>
        <span className='feed__stats'>
          <span className='feed__comments'>  </span>
          <Button onClick={handleLikes} className='feed__stats__bookmarks'> <FiStar className='feed__starIcon' /> {likes} </Button>
        </span>
      </section>
    </section>
  );
};
