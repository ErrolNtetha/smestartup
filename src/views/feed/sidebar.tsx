/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable  jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';
// import { MessageCounter } from 'components/messageCounter';
import {
    FiHome,
    FiMessageSquare,
    FiPlus,
    FiSearch,
    FiStar,
    FiUsers,
} from 'react-icons/fi';
import { Avatar } from 'components/avatar';

interface Props {
    toggleField: Function;
}

export const Sidebar = ({ toggleField }: Props) => {
  return (
      <div className='feed__sidebar'>
        <section className='feed__navContainer'>
            <section className='feed__dashboardContainer'>
                <h6> dashboard </h6>
                <ul className='feed__sidebarLinks'>
                    <li onClick={toggleField} className='feed__newPost'> <FiPlus /> New Post  </li>
                    <li> <FiHome /> Newsfeed </li>
                    <li className='feed__counter'>
                        <span><FiMessageSquare /> Messages</span>
                        {/* <MessageCounter counter={2} /> */}
                    </li>
                    <li> <FiStar /> Starred </li>
                    <li> <Link to='/profile'> <Avatar className='feed__sidebarAvatar' avatar='' /> Profile </Link> </li>
                </ul>
            </section>
            <section className='feed__dashboardContainer'>
                <h6> Company </h6>
                <ul className='feed__sidebarLinks'>
                    <li> <Link to='/suppliers'> <FiSearch /> Suppliers </Link> </li>
                    <li> <Link to='/founders'> <FiUsers /> Founders </Link> </li>
                </ul>
            </section>
        </section>
      </div>
  );
};
