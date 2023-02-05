import { Avatar } from 'components/avatar';
import { useStore } from 'hoc/useStore';
import React from 'react';
import ContentEditable from 'react-contenteditable';
import { FiSend } from 'react-icons/fi';

interface PostCommentProps {
    onPost: React.MouseEventHandler<HTMLButtonElement>;
    handleChange: React.FormEventHandler<HTMLDivElement>;
    handleBlur: React.FocusEventHandler<HTMLDivElement>;
    text: string;
}

export const PostComment = ({
    handleChange,
    onPost,
    handleBlur,
    text
} : PostCommentProps) => {
    const { userProfile: userData } = useStore();
    const { avatar } = userData.userData;

    return (
        <section className='feed__commentFieldContainer'>
            <Avatar avatar={avatar} className='feed__authorCommentAvatar' />
            <form action='onSubmit'>
                <ContentEditable
                  html={text}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className='feed__inputComment'
                />
            </form>
            <button type='submit' className='feed__sendCommentButton' onClick={onPost}>
                <FiSend className='feed__sendIcon' />
            </button>
        </section>
    );
};
