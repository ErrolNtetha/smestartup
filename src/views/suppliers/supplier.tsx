import React from 'react';
import blendot from 'assets/blendot.png';
import {
    FiChevronRight,
    FiHeart,
    FiShare
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
// import { Button } from 'components/button';
// import { Modal } from 'components/modal';

interface SProps {
    name: string;
    description: string;
    about: string;
    id: string;
}

export const Supplier = ({
    name,
    description,
    about,
    id
}: SProps) => {
    return (
        <section className='supplier__resultContainer'>
            <section className='supplier__supplierPost'>
                <img src={blendot} className='supplier__profilePicture' alt={`${name}'s avatar`} />
                <section className='supplier__names'>
                    <section className='supplier__detailsGroup'>
                        <h4 className='supplier__supplierName'> {name} </h4>
                        <p> {description} </p>
                    </section>
                    <p className='supplier__about'>{about}</p>
                    <span className='supplier__tags'> coffee </span>
                </section>
            </section>
            <hr className='global' />
            <More id={id} onLike={() => console.log(id)} />
        </section>
    );
};

interface MProps {
    id: string;
    onLike: React.MouseEventHandler<SVGElement>
}

export const More = ({ id, onLike }: MProps) => {
    return (
        <section className='supplier__more'>
            <section className='supplier__reactButtons'>
                <span> <FiHeart className='supplier__likeBtn' onClick={onLike} /> Save </span>
                <span> <FiShare className='supplier__likeBtn' onClick={onLike} /> Share </span>
                {/* <span> <Link to='/messages/'><FiSend className='supplier__likeBtn' onClick={onLike} /> Message</Link> </span> */}
            </section>
            <Link to={`/suppliers/${id}`} className='supplier__viewMore'> view <FiChevronRight /> </Link>
        </section>
    );
};
