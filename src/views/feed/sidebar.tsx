import React from 'react';
import { Link } from 'react-router-dom';
// import { Avatar } from 'components/avatar';
// import { Button } from 'components/button';
import { MessageCounter } from 'components/messageCounter';
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
    // const history = useHistory();

  return (
      <div className='feed__sidebar'>
          {/* <div className='feed__profileCover'> </div>
          <section className='feed__profileWrapper'>
              <span className='feed__cardNames'>
                <Avatar className='feed__profileAvatar' />
                Mphumeleli Ntetha
              </span>
            <hr style={{ opacity: '0.2' }} />
            <section className='feed__bio'>
                This is the bio
            </section>
            <section className='feed__toProfile'>
                <Button onClick={() => history.push('/profile')} className='feed__fullProfile'> My Profile </Button>
            </section>
        </section> */}

        <section className='feed__navContainer'>
            <section className='feed__dashboardContainer'>
                <h6> dashboard </h6>
                <ul className='feed__sidebarLinks'>
                    <li> <FiHome /> Newsfeed </li>
                    <li className='feed__counter'>
                        <span><FiMessageSquare /> Messages</span>
                        <MessageCounter counter={23} />
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
