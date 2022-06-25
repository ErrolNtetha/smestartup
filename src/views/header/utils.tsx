import React from 'react';
import {
    FiHome,
    FiPhone,
    FiHelpCircle,
    //  FiBell,
    //  FiBox,
    FiInfo
} from 'react-icons/fi';

export const nav = [
    {
		name: 'Home',
		id: 'home-link',
		url: '/',
		isPrivate: false,
		className: 'header__item',
        icon: <FiHome className='header__icon' />
	},
    //	{
    //	name: 'Blogs',
    //	id: 'blogs-link',
    //	url: '/blogs',
    //	isPrivate: false,
    //	className: 'header__item',
    //   icon: <FiBox className='header__icon' />
    //	},
	{
		name: 'About',
		id: 'about-link',
		url: '/about',
		isPrivate: false,
		className: 'header__item',
        icon: <FiInfo className='header__icon' />
	},
    //	{
    //	name: 'Notifications',
    //	id: 'notifications-link',
    //	url: '/notifications',
    //	isPrivate: true,
    //	className: 'header__item',
    //   icon: <FiBell className='header__icon' />
    //	},
	{
		name: 'Contact',
		id: 'contact-link',
		url: '/contact',
		isPrivate: false,
		className: 'header__item',
        icon: <FiPhone className='header__icon' />
	},
	{
		name: 'FAQ',
		id: 'faq-link',
		url: '/faq',
		isPrivate: false,
		className: 'header__item',
        icon: <FiHelpCircle className='header__icon' />
	},
];
