import React from 'react';
import { Link } from 'react-router-dom';
// import { Avatar } from 'components/avatar';
// import { Button } from 'components/button';
import {
    FiHome,
    FiMessageSquare,
    FiPlus,
    FiSearch,
    FiStar,
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
                    <li> <FiMessageSquare /> Messages </li>
                    <li> <FiStar /> Starred </li>
                    <li> <Avatar className='feed__sidebarAvatar' avatar='' /> Profile </li>
                    <li> <FiPlus /> New Post  </li>
                </ul>
                {/* <Button className='feed__fullProfile'> <FiLogOut /> Logout </Button> */}
            </section>
            <section className='feed__dashboardContainer'>
                <h6> Company </h6>
                <ul className='feed__sidebarLinks'>
                    <li> <Link to='/suppliers'> <FiSearch /> Suppliers </Link> </li>
                </ul>
            </section>
        </section>
      </div>
  );
};
