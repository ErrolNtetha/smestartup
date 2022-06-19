import React from 'react';
import defaultAvatar from 'assets/blendot.png';

type Props = {
    className: string
    avatar: string;
}

export const Avatar = ({ className, avatar }: Props) => {
    return (
        <section>
            {!avatar ? <img src={defaultAvatar} alt='just a random pic' className={className} />
                : <img src={defaultAvatar} alt='just a random pic' className={className} />}
        </section>
    );
};
