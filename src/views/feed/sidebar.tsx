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

export const Sidebar = () => {
  return (
      <div className='feed__sidebar'>
        <section className='feed__navContainer'>
            <section className='feed__dashboardContainer'>
                <h6> dashboard </h6>
                <ul className='feed__sidebarLinks'>
                    <li> <FiHome /> Newsfeed </li>
                    <li className='feed__counter'>
                        <span><FiMessageSquare /> Messages</span>
                        {/* <MessageCounter counter={2} /> */}
                    </li>
                    <li> <FiStar /> Starred </li>
                    <li> <Link to='/profile'> <Avatar className='feed__sidebarAvatar' avatar='' /> Profile </Link> </li>
                    <li> <FiPlus /> New Post  </li>
                </ul>
                {/* <Button className='feed__fullProfile'> <FiLogOut /> Logout </Button> */}
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
