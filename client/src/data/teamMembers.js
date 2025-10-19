import angeloPhoto from '../assets/profile/angeloProfile.jpg';
import valentinaPhoto from '../assets/profile/valentina.jpg';
import asmaitPhoto from '../assets/profile/asmait.jpg';

export const members = [
	{
		slug: 'angelo',
		name: 'Angelo Rossi',
		role: 'CEO',
		email: 'Angelo.rossi@mac-ro-capital.com',
		phone: '+971 585928981',
		whatsapp: '+971 585928981',
		address: 'Dubai, UAE',
        photo: angeloPhoto,
	},
    {
		slug: 'valentina',
		name: 'Valentina Rossi',
		role: 'Head of Administration',
		email: 'administration@mac-ro-capital.com',
		phone: '+971 50 660 2595',
		whatsapp: '+971 50 660 2595',
		address: 'Italy, EU',
		photo: valentinaPhoto,
	},
	{
		slug: 'asmait',
		name: 'Asmait F. Ghebrehiwet',
		role: 'Sales Manager',
		email: 'asmaitfutsumbrhan@gmail.com',
		phone: '+971 50 188 3042',
		whatsapp: '+971 50 188 3042',
		address: 'Dubai, UAE',
        photo: asmaitPhoto,
	},
];

export function getInitials(name) {
    const parts = name.split(' ').filter(Boolean);
    const first = parts[0]?.[0] || '';
    const last = parts[parts.length - 1]?.[0] || '';
    return (first + last).toUpperCase();
}
