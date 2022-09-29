import React from 'react';
import defaultBusiness from 'assets/defaultBusiness.png';

type Props = {
    className: string
    avatar: string;
}

export const BusinessAvatar = ({ className, avatar }: Props) => {
    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {!avatar ? <img src={defaultBusiness} alt='Default logo' className={className} />
                : <img src={avatar} alt='Business logo' className={className} />}
        </section>
    );
};
