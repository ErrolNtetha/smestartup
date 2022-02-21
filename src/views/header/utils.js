import { Home, About, Contact, Profile } from 'react-icons';

export const nav = [
	{
		name: 'Home',
		id: 'home-link',
		url: 'home/',
		isPrivate: false,
		icon: <Home />,
	},
	{
		name: 'About',
		id: 'home-link',
		url: 'about/',
		isPrivate: false,
		icon: <About />,
	},
	{
		name: 'Contact',
		id: 'contact-link',
		url: 'contact/',
		isPrivate: false,
		icon: <Contact />,
	},
	{
		name: 'Profile',
		id: 'profile-link',
		url: 'profile/',
		isPrivate: true,
		icon: <Profile />,
	},
]