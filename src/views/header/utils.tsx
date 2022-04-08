import React from 'react';
import {
    FiHome,
    FiPhone,
    FiHelpCircle,
    FiBell,
    FiBox,
    FiInfo
} from 'react-icons/fi';

export const nav = [
    {
		name: 'Home',
		id: 'home-link',
		url: '/feed',
		isPrivate: true,
		className: 'header__item',
        icon: <FiHome />
	},
	{
		name: 'Features',
		id: 'features-link',
		url: '/features',
		isPrivate: false,
		className: 'header__item',
        icon: <FiBox />
	},
	{
		name: 'About',
		id: 'about-link',
		url: '/about',
		isPrivate: false,
		className: 'header__item',
        icon: <FiInfo />
	},
	{
		name: 'Notifications',
		id: 'notifications-link',
		url: '/notifications',
		isPrivate: true,
		className: 'header__item',
        icon: <FiBell />
	},
	{
		name: 'Contact',
		id: 'contact-link',
		url: '/contact',
		isPrivate: false,
		className: 'header__item',
        icon: <FiPhone />
	},
	{
		name: 'FAQ',
		id: 'faq-link',
		url: '/faq',
		isPrivate: false,
		className: 'header__item',
        icon: <FiHelpCircle />
	},
];
