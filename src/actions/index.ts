import { defineAction } from 'astro:actions';

const rabbitBreeds = [
	'Holland Lop',
	'Mini Rex',
	'Netherland Dwarf',
	'Lionhead',
	'Flemish Giant',
	'English Angora',
	'Dutch Rabbit',
	'Mini Lop',
	'Rex',
	'French Lop',
];

export const server = {
	getRandomRabbitBreed: defineAction({
		handler: async () => {
			const randomIndex = Math.floor(Math.random() * rabbitBreeds.length);
			return rabbitBreeds[randomIndex];
		},
	}),
	getLocationGreeting: defineAction({
		handler: async (_, context) => {
			const countryCode = context.request.headers.get('cdn-requestcountrycode');

			if (!countryCode) {
				return 'Hello from somewhere in the world!';
			}

			return `Hello from ${countryCode}!`;
		},
	}),
};
