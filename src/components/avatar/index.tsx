import React from 'react';
import defaultAvatar from 'assets/blendot.png';

type Props = {
    className: string
    avatar: string;
    alt?: string;
}

export const Avatar = ({ className, avatar, alt = 'user' }: Props) => {
    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {!avatar
                ? <img src={defaultAvatar} alt={alt} className={className} />
                : <img src={avatar} alt={alt} className={className} /> }
        </section>
    );
};
