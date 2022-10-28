/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable  */
import React from 'react';
import {
    FiChevronRight,
    FiHardDrive,
    FiHeart,
    FiMapPin,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Collapsable } from 'components/collapsable';
// import { Button } from 'components/button';
// import { Modal } from 'components/modal';
import { BusinessAvatar } from 'components/avatar/business';
import { axiosPrivate } from 'config/axiosInstance';

interface SProps {
    name: string;
    companyType: string;
    about: string;
    id: string;
    avatar: string;
}

export const Supplier = ({
    name,
    companyType,
    about,
    id,
    avatar
}: SProps) => {
    return (
        <section className='supplier__resultContainer'>
            <section className='supplier__supplierPost'>
                {/* <img src={blendot} className='supplier__profilePicture' alt={`${name}'s avatar`} /> */}
                <section className='supplier__names'>
                    <section className='supplier__detailsGroup'>
                        <BusinessAvatar avatar={avatar} className='supplier__profilePicture' />
                        <span>
                            <h4 className='supplier__supplierName'> {name} </h4>
                            <p className='supplier__type'> <FiHardDrive /> {companyType} </p>
                            <p className='supplier__something'> <FiMapPin /> Durban, South Africa </p>
                        </span>
                    </section>
                    <p className='supplier__about'>
                        <Collapsable end={200}>
                            {about}
                        </Collapsable>
                    </p>
                </section>
            </section>
            <hr className='global' />
            <More
              id={id}
              onLike={() => console.log(id)}
              onSave={async() => await axiosPrivate.post('/suppliers', { id })
                  .then((response) => console.log(response.data.message))
                  .catch((error) => console.log(error.message))
              }
            />
        </section>
    );
};

interface MProps {
    id: string;
    onLike: React.MouseEventHandler<SVGElement>;
    onSave: React.MouseEventHandler<HTMLSpanElement>;
}

export const More = ({ id, onLike, onSave }: MProps) => {
    return (
        <section className='supplier__more'>
            <section className='supplier__reactButtons'>
                <span onClick={onSave}> <FiHeart className='supplier__likeBtn' /> Save </span>
                {/* <span> <FiShare className='supplier__likeBtn' onClick={onLike} /> Share </span> */}
                {/* <span> <Link to='/messages/'><FiSend className='supplier__likeBtn' onClick={onLike} /> Message</Link> </span> */}
            </section>
            <Link to={`/suppliers/${id}`} className='supplier__viewMore'> view <FiChevronRight /> </Link>
        </section>
    );
};
