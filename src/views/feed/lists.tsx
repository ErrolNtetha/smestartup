import React from 'react';
import { PostField } from 'components/postField';
import { List } from 'components/lists/list';
import { RootState } from 'store';
import { Create } from 'components/create';
import { useSelector } from 'react-redux';
import { ScaleLoader } from 'react-spinners';
import { useFetchData } from 'hoc/useFetchData';

export const Lists = () => {
  const toggleState = useSelector((state: RootState) => state.isToggleOn);
    const response = useFetchData('/feed');
    const { posts } = response.data;

    interface Props {
        post: string;
        encodedImage: string;
        user: {
            name: {
                firstName: string;
                lastName: string;
            }
            occupation: string;
            isVerified: boolean;
            _id: string;
            avatar: string;
        };
        _id: string;
        createdAt: Date;
    }

 return (
    <div className='feed__feedWrapper'>
        {toggleState ? <PostField /> : null}
        { response.loading ? <section className='feed__loader'> <ScaleLoader color='white' /> </section>
                : posts?.sort((a: string, b: string) => b.createdAt > a.createdAt).map(({
                    post, encodedImage, user, _id, createdAt
                }: Props) => (
              <List
                post={post}
                image={encodedImage}
                isVerified={user?.isVerified}
                name={user?.name}
                key={_id}
                date={createdAt}
                id={_id}
                occupation={user?.occupation}
                avatar={user?.avatar}
                author={user?._id}
              />
              ))}
        {!toggleState
        ? <Create />
        : null}
    </div>
  );
};
