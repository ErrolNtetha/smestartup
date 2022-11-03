import React from 'react';
import {
    FiHome,
    FiPhone,
    FiHelpCircle,
    FiBriefcase,
    //  FiBell,
    //  FiBox,
    FiInfo,
    FiSearch
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
    {
        name: 'Suppliers',
        id: 'suppliers-link',
        url: '/suppliers',
        isPrivate: true,
        className: 'header__item',
        icon: <FiSearch className='header__icon' />
    },
    {
        name: 'Founders',
        id: 'founder-link',
        url: '/founders',
        isPrivate: true,
        className: 'header__item',
        icon: <FiBriefcase className='header__icon' />
    },

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
